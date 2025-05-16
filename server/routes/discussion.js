const express = require('express');
const router = express.Router();
const Discussion = require('../models/Discussion'); // Assuming you have a Discussion model

// Route to handle posting a reply
router.post('/:id/reply', async (req, res) => {
    try {
        const discussionId = req.params.id;
        const { reply } = req.body;

        const discussion = await Discussion.findById(discussionId);
        if (!discussion) {
            return res.status(404).json({ message: 'Discussion not found' });
        }

        discussion.replies.push({ text: reply, createdAt: new Date() });
        await discussion.save();

        res.status(200).json({ message: 'Reply added successfully' });
    } catch (error) {
        console.error('Error adding reply:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;