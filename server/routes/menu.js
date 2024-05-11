const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post('/add', function (req, res) {
    const { name, price} = req.body;


    let errors = [];
    if (!name) errors.push('Name is required');
    if (!price) errors.push('Price is required');

    console.log("jeff")
    console.log(req.body)

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(", ") });
    }

    // First, insert into Student table
    const menuSql = 'INSERT INTO Menu (name, price) VALUES (?,?)';
    const menuValues = [name, price];
    connection.query(menuSql, menuValues, function (err, result) {
        if (err) {
            res.status(500).json({ error: 'Failed to enter Menu' });
            return;
        }
            res.send({message: 'Menu entered successfully'});
    });
});

module.exports = router;