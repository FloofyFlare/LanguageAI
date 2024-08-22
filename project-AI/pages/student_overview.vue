<template>
  <div class="sm:hidden flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold text-center">Your window is too small. Please exstend the window or use a larger screen size.</h1>
  </div>
  <ClientOnly>
    <body class="hidden sm:block bg-base-100">
      <div class="flex justify-center">
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full bg-base-100 pt-0 p-10 border-gray-300">
          <div class="text-center h-1/3 mt-10 justify-right">
            <div class="flex text-center align-left">
            </div>
            <div class="flex gap-5 items-end justify-center flex-end">
              <p class="text-3xl font-bold">Timer:</p>
              <div>
                <span class="countdown font-mono text-4xl">
                  <span :style="`--value:${minuets}`"></span>
                </span>
                minutes
              </div>
              <div class="hidden">
                <span class="countdown font-mono text-4xl">
                  <span :style="`--value:${seconds}`"></span>
                </span>
                seconds
              </div>
              <p class="text-3xl font-bold text-primary">Unique words: {{ wordSet.size }}</p>
              <article class="clip">
              <audio id="audio"></audio>
              <audio id="audio-save"></audio>
              </article>      
            </div>
          </div>
          <div class="text-center h-1/3 mb-8 justify-right mt-24">
            <div class="avatar h-full w-full flex justify-center">
              <div class="w-2/4 min-w-80 h-2/4 ">
                <div v-if="isAI" class="h-full w-full rounded-full bg-secondary p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation_talking"></div>
                <div v-else class="h-full w-full rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation"></div>
              </div>
            </div>
          </div>
          
          <div class="text-center h-1/3 justify-right">
            <p class="text-xl font-bold pb-2">Hold down to speak!</p>
            <button id="audio-Btn" class="btn btn-circle h-full p-4 mb-8 w-1/4 min-w-48 bg-info text-neutral shadow-2xl" @mousedown="conversation(true)" @mouseup="conversation(false)" @mouseout="conversation(false)">
              <span v-if="speaking" class="loading w-1/4  h-20 loading-bars bg-secondary loading-lg"></span>
              <NuxtImg v-else :src="'/images/mic.png'" class="w-20 h-20"></NuxtImg>
            </button>
          </div>
          
        </div>
        <div class="w-1/2 m-4 mb-10 shadow-xl rounded-3xl shadow-amber-400 overflow-y-scroll border-l-2 h-full min-h-screen bg-base-100 pt-0 p-10 border-gray-300 bg-warning">
          <div class="flex justify-center mb-4">
            <h1 class="text-center text-3xl p-4">Lesson: Introduce Yourself </h1>
            <div class="h-1/3 m-2">
              <button class="btn btn-secondary ml-2 w-full" @click="initialChat()">
                Reset Lesson
              </button>
              <div class="collapse shadow-lg h-1/3 m-2 w-full bg-base-200">
              <input type="checkbox" />
              <div class="collapse-title text-xl font-medium p-3">Word Bank</div>
              <div class="collapse-content">
                <p>hello : Bonjour</p>
                <p>today : aujourd'hui</p>
                <p>my name is : Je m'appelle</p>
                <p>What is your name? : Comment vous appelez-vous?</p>
              </div>
            </div>
            </div>
          </div>
          <div v-for="{ role, content } in chatHistory.slice(1)" :class="`chat ${chatSide(role)}`">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div v-if="role === 'ai'" class="h-full w-full rounded-full bg-orange-500 p-2"></div>
                <img
                  v-if="role !== 'ai'"
                  alt="Tailwind CSS chat bubble component"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png" />
              </div>
            </div>
            <div class="chat-header">
              {{role}}
            </div>
            <div class="chat-bubble shadow-xl chat_enter text-xl">{{content}}</div>
          </div>
        </div>
        <div v-if="timeup" class="fixed top-0 left-0 z-10 w-full h-full bg-opacity-50 bg-black">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
              <div class="card-actions justify-end">
                <button class="btn btn-square btn-sm" @click="timeup = false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p>Time is up! ("you can close this and continue in the demo")</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </ClientOnly>
</template>

<script setup lang="ts">
  import { ref, onMounted} from 'vue';
  import { getUserMedia, speachToText, textToSpeech } from '../scripts/SpeechAPI.js';

  

  const wordSet = ref(new Set<string>());
  const isAI = ref(false);
  const minuets = ref(14);
  const seconds = ref(30);
  const speaking = ref(false);
  const timeup = ref(false);

  function countdown() {
    if (seconds.value > 0) {
      seconds.value--;
    } else if (minuets.value > 0 && seconds.value === 0) {
      minuets.value--;
      seconds.value = 59;
    }
    if (minuets.value === 0 && seconds.value === 0) {
      console.log('Time is up!');
      stopChat();
      return;
    }
    setTimeout(countdown, 1000);
  }
  
  countdown();

  function stopChat() {
    console.log('Time is up!');
    timeup.value = true;
    // Add your code here
    // ...
    // ...
    // ...
  }
  
  interface ChatMessage {
    role: string;
    content: string;
  }
  
  function chatSide(params:string) {
    if (params == 'user') {
      return 'chat-end';
    } else {
      return 'chat-start';
    }
  }
  const chatHistory = ref<ChatMessage[]>([
    { role: 'assistant', content: "You are a language tutor bot that helps students helping them introduce themselves in French. You may ONLY respond in ACTFL Intermediate Low French." },
    { role: 'assistant', content: "Tu t'appelles comment ?" },
  ]);

  function initialChat() {
    chatHistory.value = [
      { role: 'assistant', content: "You are a language tutor bot that helps students helping them introduce themselves in French. You may ONLY respond in ACTFL Intermediate Low French." },
      { role: 'assistant', content: "Tu t'appelles comment ?" },
    ]
  }

  async function submit() {
    const response = await $fetch('/api/OpenAI', {
      method: 'post',
      body: { chat: chatHistory.value }
    })
    console.log(response)
  }

  function conversation(speak : boolean) {
    // Needs a timeout for speaking
    if (speaking.value == true && speak == false) {
      speachToText().then((result) => {
        console.log(result)
        if (result == undefined) {
          return;
        }
        let wordArray = result.split(" ");
        for (let i = 0; i < wordArray.length; i++) {
          wordSet.value.add(wordArray[i]);
        }
        wordSet.value.add(result);
        chatHistory.value.push({ role: 'user', content: `${result}` });
        const infrence = $fetch('/api/OpenAI', {
          method: 'post',
          body: { chat: chatHistory.value }
        }).then((tutorResponse) => {
          isAI.value = true;
          textToSpeech(`${tutorResponse}`, "fr-FR", "fr-FR-Standard-C", "LINEAR16", 1).then((error) => {
            isAI.value = false;
            if (error != "200") {
              console.error(error);
              // Could add an error message here
            } else{
              chatHistory.value.push({ role: 'assistant', content: `${tutorResponse}` });
            }
          });
        });
      });
    }
    speaking.value = speak;
  }
  
  onMounted(() => {
    getUserMedia();
    console.log('mounted');
  });
</script>

