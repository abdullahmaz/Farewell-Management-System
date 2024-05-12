const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/add', function (req, res) {
    const { name, price, user_id } = req.body;
    let errors = [];
    if (!name) errors.push('Name is required');
    if (!price) errors.push('Price is required');

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    // Insert into Menu table
    const menuSql = 'INSERT INTO Menu (name, price) VALUES (?, ?)';
    const menuValues = [name, price];
    connection.query(menuSql, menuValues, function (err, result) {
        if (err) {
            res.status(500).json({ error: 'Failed to enter Menu' });
            return;
        }

        // Initialize votes in Menu_votes table
        const menuVotesSql = 'INSERT INTO Menu_votes (vote_count, user_id, item_id) VALUES (?, ?, ?)';
        const menuVotesValues = [0, user_id, result.insertId]; // result.insertId is the newly created item_id
        connection.query(menuVotesSql, menuVotesValues, function (err, voteResult) {
            if (err) {
                res.status(500).json({ error: 'Failed to initialize votes for Menu' });
                return;
            }
            res.send({message: 'Menu entered and votes initialized successfully'});
        });
    });
});

router.get('/', function (req, res) {
    const menuSql = `
        SELECT m.item_id, m.name, m.price, COALESCE(SUM(v.vote_count), 0) AS votes
        FROM Menu m
        LEFT JOIN Menu_votes v ON m.item_id = v.item_id
        GROUP BY m.item_id, m.name, m.price
    `;
    connection.query(menuSql, function (err, results) {
        if (err) {
            res.status(500).json({ error: 'Failed to retrieve Menu' });
            return;
        }
        res.json({ menu: results });
    });
});

router.post('/vote/:id', (req, res) => {
    const userId = req.body.user_id; // Ensure you have user identification logic
    const itemId = req.params.id;

    // Check if the user has already voted
    connection.query('SELECT * FROM Menu_votes WHERE user_id = ? AND item_id = ?', [userId, itemId], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error during vote check' });
            return;
        }
        if (results.length > 0) {
            res.status(400).json({ error: 'You have already voted for this item.' });
        } else {
            // Insert vote into Menu_votes table
            connection.query('INSERT INTO Menu_votes (vote_count, user_id, item_id) VALUES (0, ?, ?)', [userId, itemId], (error, results) => {
                if (error) {
                    res.status(500).json({ error: 'Database error during vote insertion' });
                    return;
                }
                // Update vote count in Menu_votes table
                connection.query('UPDATE Menu_votes SET vote_count = vote_count + 1 WHERE item_id = ? AND user_id = ?', [itemId, userId], (error, updateResults) => {
                    if (error) {
                        res.status(500).json({ error: 'Failed to update votes' });
                    } else {
                        res.json({ message: 'Vote recorded' });
                    }
                });
            });
        }
    });
});


router.delete('/remove/:id', function (req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    console.log(id);

    // First, delete from Menu_votes
    const removeVotesSql = 'DELETE FROM Menu_votes WHERE item_id = ?';
    connection.query(removeVotesSql, [id], function (err, voteResult) {
        if (err) {
            res.status(500).json({ error: 'Failed to remove votes for menu item' });
            return;
        }

        // Then, delete from Menu
        const removeMenuSql = 'DELETE FROM Menu WHERE item_id = ?';
        connection.query(removeMenuSql, [id], function (err, menuResult) {
            if (err) {
                res.status(500).json({ error: 'Failed to remove menu item' });
                return;
            }
            if (menuResult.affectedRows === 0) {
                res.status(404).json({ error: 'Menu item not found' });
                return;
            }
            res.json({ message: 'Menu item and associated votes removed successfully' });
        });
    });
});

module.exports = router;