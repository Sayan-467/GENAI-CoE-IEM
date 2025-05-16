import dbConnect from '../../../utils/dbConnect';
import Discussion from '../../../models/Discussion';

export default async function handler(req, res) {
    await dbConnect(); // Ensure DB connection

    const { id } = req.query;

    if (req.method === 'POST') {
        try {
            const discussion = await Discussion.findById(id);
            if (!discussion) return res.status(404).json({ error: "Discussion not found" });

            const { text } = req.body;
            if (!text) return res.status(400).json({ error: "Reply cannot be empty" });

            discussion.replies.push({ text, createdAt: new Date() });
            await discussion.save();

            return res.status(201).json(discussion);
        } catch (error) {
            return res.status(500).json({ error: "Server error" });
        }
    }

    res.status(405).json({ error: "Method Not Allowed" });
}
