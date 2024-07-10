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
            <button class="btn bg-info text-neutral">
              <NuxtImg :src="'/images/mic.png'" class="w-10 h-10"></NuxtImg>
              Speak
            </button>
          </div>
        </div>
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full bg-base-100 pt-0 p-10 border-gray-300 bg-warning">
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              Tony
            </div>
            <div class="chat-bubble chat_enter">abdfglsaf</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <div class="h-full w-full rounded-full bg-orange-500 p-2"></div>
              </div>
            </div>
            <div class="chat-header">
              AI
            </div>
            <div class="chat-bubble chat_enter">fdsfahasdfldw</div>
          </div>
        </div>
      </div>
    </main>
  

  </body>
</template>
<script setup lang="ts">

</script>