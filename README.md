# cf_ai_language_tutor

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
| **LLM**           | External LLM (`gpt-4o-mini`) handles tutoring logic and grammar correction |
| **Workflow**      | Cloudflare Workers coordinate API calls and session flow                   |
| **User Input**    | Voice input via microphone (Whisper) and chat interface (Nuxt + Supabase)  |
| **Memory/State**  | Supabase stores user progress, session history, and lesson metadata        |
| **Deployment**    | Cloudflare Pages + Workers for edge-native CI/CD and routing               |

## 🚀 Try Out the UI

https://languageai.pages.dev/
** Currenly the AI api keys have been disabled to prevent missuse
** the UI works just fine though.

Here is a temporary log in
Student login: darkninja4347@yahoo.com
password: password

Teacher login: raymondflowersiv@gmail.com
password: password

## Live Demos!
** These videos showcase the websites AI functionality and were used at MOVE's pitch competition
https://drive.google.com/drive/folders/1WX_JkIMXxrEPqqpeAr81287FTuQvkNso?usp=drive_link

