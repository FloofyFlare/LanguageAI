# cf_ai_language_tutor 📺

An AI-powered language tutoring tool that helps students practice foreign languages through voice and chat. Built entirely on Cloudflare infrastructure using Nuxt, Supabase, and a combination of cutting-edge AI models.

## 🧠 Overview

This project combines speech recognition, LLM-powered tutoring, and voice synthesis to create an immersive language learning experience. Students can speak or type in their target language, receive intelligent feedback, and hear corrected responses—all in real time.

### 🔧 Tech Stack

- **LLM**: `gpt-4o-mini` (OpenAI) for conversational tutoring and grammar correction  
- **Speech-to-Text**: `whisper-large-v3` for accurate multilingual transcription  
- **Text-to-Speech**: Google Cloud AI TTS for natural voice responses  
- **Frontend**: Nuxt 3 (Vue-based framework)  
- **Database**: Supabase (PostgreSQL + Auth)  
- **Deployment**: Cloudflare Pages + Workers for CI/CD and edge execution  

## ⚙️ Architecture

| Component         | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **LLM**           | External LLM (`gpt-4o-mini`) handles tutoring logic and grammar correction   |
| **Workflow**      | Cloudflare Workers coordinate API calls and session flow                     |
| **User Input**    | Voice input via microphone (Whisper) and chat interface (Nuxt + Supabase)    |
| **Memory/State**  | Supabase stores user progress, session history, and lesson metadata          |
| **Deployment**    | Cloudflare Pages + Workers for CI/CD and routing                 |

## 🚀 Try Out the UI

🔗 [Live Demo](https://languageai.pages.dev)

> ⚠️ **Note:** AI API keys have been temporarily disabled to prevent misuse.  
> The UI and core functionality remain fully accessible.

### 🔐 Temporary Logins

**Student Login**  
Email: `darkninja4347@yahoo.com`  
Password: `password`

**Teacher Login**  
Email: `raymondflowersiv@gmail.com`  
Password: `password`

## 📺 How to Use the Language Tutor

To explore the full functionality of this AI-powered language learning tool, follow these steps:

### 1. Log In
- Visit the deployed app: [languageai.pages.dev](https://languageai.pages.dev)
- Use the login credentials provided above.

If you encounter issues logging in, contact me at: `raymondflowersiv@gmail.com`

### 2. Explore the Interface
Once logged in, you’ll be taken to either the student or teacher dashboard. You can interact with the tutor via:
- 🎙️ **Voice input** (microphone icon) — speak in your target language
- 💬 **Text input** — type questions or responses

The AI will respond with:
- ✅ Corrected grammar and conversational feedback
- 🔊 Spoken output using Google Cloud Text-to-Speech

### 3. Watch the Demo
To see the full flow in action, check out the demo videos:

📼 [Demo Folder on Google Drive](https://drive.google.com/drive/folders/1WX_JkIMXxrEPqqpeAr81287FTuQvkNso?usp=drive_link)

- **Instructor Walkthrough** — backend coordination and AI logic  
- **Student Experience** — voice input, LLM feedback, and UI navigation  

These videos were showcased at MOVE’s pitch competition and demonstrate how the system uses Whisper for transcription, GPT-4o-mini for tutoring, and Cloudflare Workers for orchestration.

---




