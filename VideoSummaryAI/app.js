import dotenv from 'dotenv';
import OpenAI from "openai";
import { YoutubeTranscript } from 'youtube-transcript';


// Initialize environment variables
dotenv.config();

// Create a new instance of OpenAI with the API key from environment variables
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Use async/await for asynchronous operations
async function getVideoTranscription(videoId) {
    try {
        // Fetch the transcript and join all parts into a single string
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);
        return transcript.map(part => part.text).join(' ');
    } catch (error) {
        console.error("Failed to fetch subtitles:", error);
        return null;
    }
}


async function generateSummary(text) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "Summarize content you are provided with for a second-grade student."
                },
                {
                    "role": "user",
                    "content": { text }
                }
            ],
            temperature: 0.1,
            max_tokens: 600,
            top_p: 1,
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Failed to generate summary:", error);
        return null;
    }
}

// Export functions using ES Module syntax
export { getVideoTranscription, generateSummary };
