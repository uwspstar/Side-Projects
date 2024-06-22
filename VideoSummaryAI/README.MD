# VideoSummaryAI 
For your Node.js application that retrieves transcriptions from a YouTube video URL and uses OpenAI to generate summaries, we can create a project named "VideoSummaryAI". Below is a detailed guide on how to implement this.

为您的 Node.js 应用程序，该程序从 YouTube 视频 URL 检索字幕并使用 OpenAI 生成摘要，我们可以创建一个名为 "VideoSummaryAI" 的项目。以下是如何实现此功能的详细指南。

### Step 1: Set Up Your Node.js Environment
### 第一步：设置您的 Node.js 环境

1. **Initialize a new Node.js project:**
   Create a new directory for your project and initialize it with `npm`.

1. **初始化一个新的 Node.js 项目：**
   为您的项目创建一个新目录，并使用 `npm` 进行初始化。

   ```bash
   mkdir VideoSummaryAI
   cd VideoSummaryAI
   npm init -y
   ```

2. **Install necessary packages:**
   Install `youtube-transcript-api` to fetch YouTube transcriptions and `openai` SDK for interacting with OpenAI.

2. **安装必要的包：**
   安装 `youtube-transcript-api` 以获取 YouTube 字幕和用于与 OpenAI 交互的 `openai` SDK。

   ```bash
   npm install youtube-transcript-api openai axios dotenv
   ```

### Step 2: Set Up the Transcription and Summary Functions
### 第二步：设置字幕和摘要功能

1. **Create a file for the main application logic:**
   Name this file `app.js`.

1. **创建一个用于主应用逻辑的文件：**
   将此文件命名为 `app.js`。

   ```javascript
   const { getSubtitles } = require('youtube-transcript-api');
   const { Configuration, OpenAIApi } = require('openai');
   const dotenv = require('dotenv');
   dotenv.config();

   const apiKey = process.env.OPENAI_API_KEY;

   const configuration = new Configuration({
     apiKey: apiKey,
   });
   const openai = new OpenAIApi(configuration);

   async function getVideoTranscription(videoId) {
     try {
       const subtitles = await getSubtitles({ videoID: videoId, lang: 'en' });
       return subtitles.map(sub => sub.text).join(' ');
     } catch (error) {
       console.error("Failed to fetch subtitles:", error);
       return null;
     }
   }

   async function generateSummary(text) {
     try {
       const response = await openai.createCompletion({
         model: "text-davinci-002",
         prompt: `Summarize the following content: ${text}`,
         max_tokens: 150,
       });
       return response.data.choices[0].text.trim();
     } catch (error) {
       console.error("Failed to generate summary:", error);
       return null;
     }
   }

   module.exports = { getVideoTranscription, generateSummary };
   ```

2. **Use environment variables to secure API keys:**
   Store the OpenAI API key in a `.env` file.

2. **使用环境变量保护 API 密钥：**
   在 `.env` 文件中存储 OpenAI API 密钥。

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### Step 3: Implement a Server to Handle Requests
### 第三步：实现一个服务器以处理请求

1. **Set up an Express server in a new file `server.js`:**
   This server will handle requests to get transcriptions and summaries.

1. **在新文件 `server.js` 中设置 Express 服务器：**
   此服务器将处理获取字幕和摘要的请求。

   ```javascript
   const express = require('express');
   const { getVideoTranscription, generateSummary } = require('./app');

   const app = express();
   app.use(express.json());

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

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server running

 on http://localhost:${PORT}`);
   });
   ```

2. **Start your server and test it:**
   Use Postman or a similar tool to send requests to your server.

2. **启动服务器并进行测试：**
   使用 Postman 或类似工具向服务器发送请求。

This setup provides a clear separation between the transcription fetching, summary generation, and server handling, making the code modular and easier to maintain.

此设置在获取字幕、生成摘要和服务器处理之间提供了清晰的分离，使代码模块化，更易于维护。
