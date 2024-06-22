// Import modules using ES Module syntax
import express from 'express';
import { getVideoTranscription, generateSummary } from './app.js';

// Initialize the express application
const app = express();
app.use(express.json());

// Define a route for fetching video summary
app.get('/video-summary', async (req, res) => {
    const { videoUrl } = req.query;
    const videoId = videoUrl.split('v=')[1];
    const transcription = await getVideoTranscription(videoId);
    if (!transcription) {
        return res.status(500).json({ message: 'Failed to get transcription' });
    }
    const summary = await generateSummary(transcription);
    if (!summary) {
        return res.status(500).json({ message: 'Failed to generate summary' });
    }
    res.json({ transcription, summary });
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
