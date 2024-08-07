<template>
  <div class="sm:hidden flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold text-center">Your window is too small. Please exstend the window or use a larger screen size.</h1>
  </div>
  <body class="hidden sm:block bg-base-100">
    <main>
      <div class="flex justify-center">
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full bg-base-100 pt-0 p-10 border-gray-300">
          <div class="text-center h-1/3 mt-10 justify-right">
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
              
                <article class="clip">
                <audio id="audio"></audio>
                <audio id="audio-save"></audio>
                </article>             
            </div>
          </div>
          <div class="text-center h-1/3 mb-8 justify-right mt-24">
            <div class="avatar h-full w-full flex justify-center">
              <div class="w-2/4 h-2/4 ">
                <div v-if="isAI" class="h-full w-full rounded-full bg-secondary p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation_talking"></div>
                <div v-else class="h-full w-full rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation"></div>
              </div>
            </div>
          </div>
          <div class="text-center h-1/3 justify-right">
            <button id="audio-Btn" class="btn btn-circle h-full p-4 mb-8 w-1/4 bg-info text-neutral shadow-2xl" @mousedown="aiSpeaking()" @mouseup="isSpeaking()">
              <span v-if="speaking" class="loading w-1/4 h-20 loading-bars bg-secondary loading-lg"></span>
              <NuxtImg v-else :src="'/images/mic.png'" class="w-20 h-20"></NuxtImg>
            </button>
          </div>
        </div>
        <div class="w-1/2 m-4 mb-10 shadow-xl rounded-3xl shadow-amber-400 overflow-y-scroll border-l-2 h-full min-h-screen bg-base-100 pt-0 p-10 border-gray-300 bg-warning">
          <div v-for="{ id, sender, message } in chatHistory" :key="id" :class="`chat ${chatSide(sender)}`">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div v-if="sender === 'ai'" class="h-full w-full rounded-full bg-orange-500 p-2"></div>
                <img
                  v-if="sender !== 'ai'"
                  alt="Tailwind CSS chat bubble component"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png" />
              </div>
            </div>
            <div class="chat-header">
              {{sender}}
            </div>
            <div class="chat-bubble chat_enter text-xl">{{message}}</div>
          </div>
        </div>
      </div>
    </main>
  

  </body>
</template>

<script setup lang="ts">
  import { ref, onMounted} from 'vue';
  import { getUserMedia, curlDeepInfra } from '../scripts/Recording.js';
  import { infrence } from '../scripts/OpenAI.js';
  
  
  const isAI = ref(false);
  const order = 0;
  const minuets = ref(14);
  const seconds = ref(30);
  const speaking = ref(false);

  function countdown() {
    if (seconds.value > 0) {
      seconds.value--;
    } else if (minuets.value > 0 && seconds.value === 0) {
      minuets.value--;
      seconds.value = 59;
    }
    setTimeout(countdown, 1000);
  }
  
  countdown();
  
  interface ChatMessage {
    id: number;
    sender: string;
    message: string;
  }
  
  function chatSide(params:string) {
      if (params == 'ai') {
        return 'chat-end';
      } else {
        return 'chat-start';
      }
  }

  const chatHistory = ref<ChatMessage[]>([]);

  testInput();
  function testInput() {
    chatHistory.value = [
      { id: order, sender: 'ai', message: "Tu t'appelles comment ?" },
      { id: order, sender: 'you', message: "Je m'appelle John et toi ?" },
      { id: order, sender: 'ai', message: "Je m'appelle Jean." },
    ];
  }
  function talking() {
    console.log(isAI.value);
    isAI.value = !isAI.value;
  }

  function isSpeaking() {
    speaking.value = !speaking.value;
    if (!speaking.value) {
      curlDeepInfra().then((result) => {
        chatHistory.value.push({ id: order, sender: 'ai', message: `${result}` });
      });
    }
  }

  function aiSpeaking() {
    speaking.value = !speaking.value;
    // (async () => {
    //   const aiMessage = await infrence();
    //   chatHistory.value.push({ id: order, sender: 'ai', message: `${aiMessage}` });
    // })();
  }

  

  const sendMessage = () => {
    const userMessage = userMessageInput.value;
    if (userMessage) {
      chatHistory.value.push({ id: order, sender: 'user', message: userMessage });
      userMessageInput.value = '';
    }
  };

  const userMessageInput = ref('');

  onMounted(() => {
    getUserMedia();

    console.log('mounted');
  });
</script>

