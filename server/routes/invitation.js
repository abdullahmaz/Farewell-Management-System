const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '-',  // Your mail
        pass: '-'   // Your password  
    }
});

router.post('/send', function (req, res) {
    const recipientEmail = req.body.email;
    const mailOptions = {
        from: 'Farewell Party at FAST',
        to: recipientEmail,
        subject: 'Invitation to Farewell Party',
        text: `Dear ${recipientEmail.split('@')[0]},\n\nWe are excited to invite you to our farewell party at FAST University on the date 22/02/2024 at 10:00 PM. It's an opportunity for us to express our gratitude for your presence and contributions.\n\nWe look forward to seeing you there!\n\nBest regards,\nFAST Management Society`,
        attachments: [
            {
                filename: 'farewell_invitation.png',
                path: './public/card.png',
                cid: 'unique@nodemailer.com'
            }
        ]
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error sending email" });
        } else {
            console.log(info);
            res.status(200).json({ message: "Email sent successfully" });
        }
    });
});

module.exports = router;