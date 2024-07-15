<template>
  <body class="bg-base-100">
    <main>
      <div class="flex justify-center items-center">
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full bg-base-100 pt-0 p-10 border-gray-300">
          <div class="text-center justify-right">
            <div class="flex gap-5 items-end justify-center flex-end">
              <p class="text-3xl font-bold">Timer:</p>
              <div>
                <span class="countdown font-mono text-4xl">
                  <span style="--value:15;"></span>
                </span>
                minutes
              </div>
              <div>
                <span class="countdown font-mono text-4xl">
                  <span style="--value:${counter};"></span>
                </span>
                seconds
              </div>
            </div>
          </div>
          <div class="text-center justify-right">
            <div class="avatar h-full w-full flex justify-center">
              <div class="w-2/4 h-2/4 ">
                <div class="h-full w-full rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2" id="ai_animation"></div>
              </div>
            </div>
          </div>
          <div class="text-center justify-right">
            <button class="btn btn-circle h-full p-4 w-1/4 bg-info text-neutral shadow-2xl">
              <NuxtImg :src="'/images/mic.png'" class="w-20 h-20"></NuxtImg>
            </button>
          </div>
        </div>
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full min-h-screen bg-base-100 pt-0 p-10 border-gray-300 bg-warning">
          <div v-for="{ id, sender, message } in chatHistory" :key="id" :class="`chat ${chatSide(sender)}`">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div v-if="sender === 'ai'" class="h-full w-full rounded-full bg-orange-500 p-2"></div>
                <img
                  v-if="sender !== 'ai'"
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              {{sender}}
            </div>
            <div class="chat-bubble chat_enter">{{message}}</div>
          </div>
        </div>
      </div>
    </main>
  

  </body>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const order = 0;

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
      { id: order, sender: 'user', message: 'hello' },
      { id: order, sender: 'ai', message: 'how are you?' },
    ];
  }

  const sendMessage = () => {
    const userMessage = userMessageInput.value;
    if (userMessage) {
      chatHistory.value.push({ id: order, sender: 'user', message: userMessage });
      userMessageInput.value = '';
    }
  };

  const userMessageInput = ref('');
</script>