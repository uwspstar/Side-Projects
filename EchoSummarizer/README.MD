# EchoSummarizer

To create an application in Node.js that captures audio from a local computer, transcribes it, and then uses OpenAI to summarize the transcription, we'll break down the steps and technologies involved. Here’s a detailed guide to achieve this:

### 1. **Capture Local Audio**

Capturing audio from a local computer, especially from applications like YouTube, requires specific handling as Node.js alone cannot directly access or record system audio. You might need to use a combination of system-specific tools and Node.js modules.

#### Tools and Modules:
- **FFmpeg**: A powerful multimedia framework that can record, convert, and stream audio and video. It's command-line based, making it a good fit for a backend application.
- **node-record-lpcm16**: A Node.js module that records PCM audio using the system's microphone or line-in audio.

However, recording audio directly from applications like YouTube on a local PC programmatically involves capturing system audio, which can be complex and may require additional software or virtual audio cables (e.g., VB-Cable, Soundflower).

**Setup FFmpeg:**
- Download and install FFmpeg from its [official website](https://ffmpeg.org/download.html).
- Ensure it's added to your system's PATH so it can be accessed from the command line.

**Example to Capture Audio:**
Here's how you might set up audio capture using `node-record-lpcm16`, but keep in mind this captures from the microphone, not directly from system audio like YouTube.

```javascript
const recorder = require('node-record-lpcm16');

// Start recording from the default microphone
const audioStream = recorder.record({
  sampleRateHertz: 44100,
  threshold: 0,
  verbose: false,
  recordProgram: 'rec', // Try 'arecord' on Linux or 'sox' on Windows
  silence: '10.0', // Silence in seconds after which to stop recording
});

audioStream.on('error', (err) => {
  console.error('Audio recording error:', err);
});
```

### 2. **Transcribe Audio**

To transcribe the audio, you can use Google's Speech-to-Text API, which offers a Node.js client library.

**Setup Google Speech-to-Text:**
- Set up a Google Cloud project and enable the Speech-to-Text API.
- Install the Google Cloud Speech-to-Text client library for Node.js:

```bash
npm install --save @google-cloud/speech
```

**Transcribe Audio Example:**
```javascript
const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();

async function transcribeAudio() {
  const request = {
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 44100,
      languageCode: 'en-US',
    },
    audio: {
      content: audioStream, // This should be the buffer of your audio file
    },
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);
  return transcription;
}
```

### 3. **Summarize with OpenAI**

Once you have the transcription, you can use OpenAI's API to summarize the content.

**Setup OpenAI:**
- Obtain an API key from OpenAI.
- Install the OpenAI Node.js client library:

```bash
npm install openai
```

**Summarize Transcription Example:**
```javascript
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getSummary(text) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Summarize the following text: \n" + text,
    max_tokens: 150,
  });

  console.log('Summary: ', response.data.choices[0].text.trim());
  return response.data.choices[0].text.trim();
}
```

### Notes and Considerations:

- **Privacy and Legal Concerns**: Recording and transcribing audio, especially from other applications, can have legal and privacy implications. Ensure compliance with local laws and platform terms.
- **Audio Source**: Capturing audio from specific applications programmatically is complex and might require additional setup like virtual audio drivers or specific OS configurations.

This setup provides a basic framework. You'll need to integrate and refine these components based on your specific requirements and the operating system's capabilities.
