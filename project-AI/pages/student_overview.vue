<template>
  <div class="sm:hidden flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold text-center">Your window is too small. Please exstend the window or use a larger screen size.</h1>
  </div>
  <ClientOnly>
    <body class="hidden h-screen sm:block bg-base-100 ">
      <div class="flex justify-center">
        <div class="w-1/2 overflow-y-scroll border-l-2 h-full bg-base-100 pt-0 p-10 border-gray-300">
          <div class="text-center h-1/3 mt-10 justify-right">
            <div class="flex text-center align-left"/>
            <div class="flex gap-5 items-end justify-center flex-end">
              <p class="text-3xl font-bold">Timer:</p>
              <div>
                <span class="countdown font-mono text-4xl">
                  <span :style="`--value:${minuets}`"/>
                </span>
                minutes
              </div>
              <div class="hidden">
                <span class="countdown font-mono text-4xl">
                  <span :style="`--value:${seconds}`"/>
                </span>
                seconds
              </div>
              <p class="text-3xl font-bold text-primary">Unique words: {{ wordSet.size }}</p>
              <article class="clip">
              <audio id="audio"/>
              <audio id="audio-save"/>
              </article>      
            </div>
          </div>
          <div class="text-center h-1/3 mb-8 justify-right mt-24">
            <div class="avatar h-full w-full flex justify-center">
              <div class="w-2/4 min-w-80 h-2/4 ">
                <div v-if="isAI" class="h-full w-full rounded-full bg-secondary p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation_talking"/>
                <div v-else class="h-full w-full rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2 ai_animation"/>
              </div>
            </div>
          </div>
          
          <div class="text-center h-1/3 justify-right">
            <p class="text-xl font-bold pb-2">Hold down to speak!</p>
            <button id="audio-Btn" :disabled="talking" class="btn btn-circle h-full p-4 mb-8 w-1/4 min-w-48 bg-info text-neutral shadow-2xl" @mousedown="conversation(true)" @mouseup="conversation(false)" @mouseout="conversation(false)">
              <span v-if="speaking" class="loading w-1/4  h-20 loading-bars bg-secondary loading-lg"/>
              <NuxtImg v-else :src="'/images/mic.png'" class="w-20 h-20"/>
            </button>
          </div>
          
        </div>
        <div class="w-1/2">
          <div class=" m-4 mt-12 shadow-xl rounded-3xl shadow-amber-400 border-l-2 h-5/6 bg-base-100 pt-0 p-10 border-gray-300 bg-warning">
            <div class="flex justify-center mb-4">
              <h1 class="text-center text-3xl p-4">{{ currtopic }}</h1>
              <div class="h-1/3 m-2">
                <button v-if="isteacher" class="btn btn-secondary ml-2 w-full" @click="initialChat(), resetTime()">
                  Reset Lesson
                </button>
                <button v-if="!isteacher" class="btn btn-secondary ml-2 w-full" @click="initialChat()">
                  Reset Lesson
                </button>
                <div class="collapse shadow-lg h-1/3 m-2 w-full bg-base-200">
                <input type="checkbox" >
                <div class="collapse-title text-xl font-medium p-3 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg> <p class="pl-4">Word Bank </p>
                </div>
                <div class="collapse-content min-w-96">
                  {{ wordbank }}
                </div>
              </div>
              </div>
            </div>
            <div id="conversation" ref="scrollDiv" class="overflow-y-scroll max-h-full" style="max-height: 450px;">
              <div  v-for="{ role, content } in chatHistory.slice(2)" :class="`chat ${chatSide(role)}`">
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <div v-if="role === 'ai'" class="w-full rounded-full bg-orange-500 p-2"/>
                    <img
                      v-if="role !== 'ai'"
                      alt="Tailwind CSS chat bubble component"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png" >
                  </div>
                </div>
                <div class="chat-header">
                  {{role}}
                </div>
                <div class="chat-bubble shadow-xl chat_enter text-xl">{{content}}</div>
              </div>
            </div>
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
              <p>Time is up! ("This would be the end of the lesson, you can close this and continue in the preview")</p>
            </div>
          </div>
        </div>
        <div v-if="lessonStart" class="fixed top-0 left-0 z-10 w-full h-full bg-opacity-50 bg-black">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
              <div class="card-actions justify-end">
                <button class="btn btn-square btn-md" @click="startlesson()">
                  Start!
                </button>
              </div>
              <p>Ready to start todays lesson?</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  </ClientOnly>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch} from 'vue';
  import { getUserMedia, speechToText, textToSpeech } from '../scripts/SpeechAPI.js';
  import { conversationTopics } from '../scripts/Conversations.js';

  const scrollDiv = ref<HTMLElement | null>(null); 
  const wordSet = ref(new Set<string>());
  const isAI = ref(false);
  const minuets = ref(5);
  const seconds = ref(30);
  const talking = ref(false);
  const speaking = ref(false);
  const timeup = ref(false);
  const lessonStart = ref(true);
  const user_name = ref('Bob');
  const time = ref(0);
  const difficulty = ref(0);
  //class is for the application curr is for the user
  const classtopic = ref(100);
  const currtopic = ref('Topic');
  const wordbank = ref('');
  const classcode = ref('');
  const dayscomplete = ref('')
  const supabase = useSupabaseClient()
  const user = supabase.auth.getUser()
  //getting user ID
  let isteacher = false;
  const userId = ref<string>('');
  const chatHistory = ref<ChatMessage[]>([]);
  //getting user ID
  import { useUserStore } from '../store/LoginStore';
  const store = useUserStore();
  async function setUserInfo(){
    await store.setUser();
    //Importing user data
    classcode.value = store.classCode;
    user_name.value = store.username;
    dayscomplete.value = store.daysComplete;
    isteacher = store.teacher;
    time.value = store.time;
    classtopic.value = store.chosenTopic;
    console.log(classtopic.value);
    difficulty.value = store.difficulty;
    wordbank.value = store.wordBank;
    //Checking if user is teacher
    if (store.teacher && classtopic.value == 100) {
      navigateTo('/teacher_overview');
    }
    if(classtopic.value == 100){
      navigateTo('/student_dashboard');
    }
    // checking days
    
    const d = new Date();
    const weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"][d.getDay()];
    if (dayscomplete.value.includes(weekday) && isteacher == false) {
      navigateTo('/student_dashboard');
      return;
    } 
    TeacherInput();
  }
  setUserInfo();
  

  function startlesson() {
    lessonStart.value = false;
    countdown();
    
  }
  
  async function TeacherInput() {
    if (time.value == 0) {
      minuets.value = 5;
      seconds.value = 1;
    } else if (time.value == 1) {
      minuets.value = 10;
      seconds.value = 1;
    } else if (time.value == 2) {
      minuets.value = 15;
      seconds.value = 1;
    } else if (time.value == 3) {
      minuets.value = 20;
      seconds.value = 1;
    }
    if (classtopic.value == 0) {
      currtopic.value = "Topic : Who Am I?";
    } 
    else if (classtopic.value == 1) {
      currtopic.value = "Topic : Streaming and Digital Media";
    }
    else if (classtopic.value == 2) {
      currtopic.value = "Topic : Professions, Careers & Work";
    } 
    else if (classtopic.value == 3) {
      currtopic.value = "Topic : Food";
    }
    initialChat();
  }

  async function countdown() {
    if (seconds.value > 0) {
      seconds.value--;
    } else if (minuets.value > 0 && seconds.value == 0) {
      minuets.value--;
      seconds.value = 59;
    }
    if (minuets.value === 0 && seconds.value === 0) {
      console.log('Time is up!');
      const today = new Date();
      const dayOfWeek = today.getDay();

      // dayOfWeek will be a number from 0 (Sunday) to 6 (Saturday)

      const days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
      

      const { data, error } = await supabase
      .from('UserData')
      .update(
        { dayscomplete:  dayscomplete.value + " " + days[dayOfWeek] ,
         uniquewords: wordSet.value.size,
         }
      )
      .eq('User', userId.value);
      stopChat();
      return;
    }
    setTimeout(countdown, 1000);
  }
  
  

  function stopChat() {
    console.log('Time is up!');
    timeup.value = true;
    if(isteacher) {
      return;
    }
    navigateTo('/student_dashboard');
    
    return;
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
  const language = "French";
  const level = "Novice Intermediate French (ACTFL).";
  const user_language = "English";
  const teacher_name = "Jane";
  

  
  function initialChat() {
    chatHistory.value = [{
      role: 'assistant',
      content: `You are a ${language} teacher named ${teacher_name}. 
      You are on a 1-on-1 session with your student, ${user_name.value}. ${user_name.value}'s 
      ${language} level is: ${level}.
      Your task is to assist your student in advancing their ${language}.
      * When the session begins, offer a suitable session for ${user_name.value}, unless
      asked for something else.
      * ${user_name.value}'s native language is ${user_language}. ${user_name.value} might 
      address you in their own language when felt their ${language} is not well 
      enough. When that happens, first translate their message to ${language}, 
      and then reply.
      * IMPORTANT: If your student makes any MAJOR mistakes (confusing or off topic responses), 
      you MUST first correct your student and only then reply otherwise dont correct them.
      * You are only allowed to speak ${language}.`,
      }
    ];
    conversationTopics[classtopic.value].forEach((item) => {
      chatHistory.value.push(item);
    });
  }
  function resetTime() {
      if (time.value == '0') {
        minuets.value = 5;
        seconds.value = 1;
      } else if (time.value == '1') {
        minuets.value = 10;
        seconds.value = 1;
      } else if (time.value == '2') {
        minuets.value = 15;
        seconds.value = 1;
      } else if (time.value == '3') {
        minuets.value = 20;
        seconds.value = 1;
      }
  }

  function conversation(speak : boolean) {
    // Needs a timeout for speaking
    if (speaking.value == true && speak == false) {
      speechToText().then((result) => {
        talking.value = true;
        if (result == undefined) {
          return;
        }
        if (result === " Sous-titrage Société Radio-Canada" || result === "Sous-titrage Société Radio-Canada") {
          chatHistory.value.push({ role: 'system', content: "No speech detected. \n Please check if your mic is working and is allowed in your browser settings." });
          talking.value = false
          return;
        }
        const wordArray = result.split(" ").slice(1);
        
        for (let i = 0; i < wordArray.length; i++) {
          wordSet.value.add(wordArray[i]);
        }
        const chatHistoryPrep = JSON.parse(JSON.stringify(chatHistory.value));
        chatHistoryPrep.push({ role: 'user', content: `
          ${result} 
          ---
          IMPORTANT: 
          * If I replied in ${language} and made any major mistakes (confusing or off topic responses), 
          you must correct me before replying
          * Keep the response appropriate for a high school student. ABSOLUTLY NO  inappropriate content.
          * You must keep the session flow, you're response cannot end the session. 
          Try to avoid broad questions like "what would you like to do", and prefer 
          to provide me with related questions and exercises. 
          * You MUST reply in ${level}.`
        });
        chatHistory.value.push({ role: 'user', content: `${result}`});
        const infrence = $fetch('/api/OpenAI', {
          method: 'post',
          body: { chat: chatHistoryPrep }
        }).then((tutorResponse) => {
          isAI.value = true;
          textToSpeech(`${tutorResponse}`, "fr-FR", "fr-FR-Standard-C", "LINEAR16", 1).then((error) => {
            isAI.value = false;
            if (error != "200") {
              console.error(error);
              talking.value = false;
              chatHistory.value.push({ role: 'system', content: "Something went wrong please refresh the page." });
              // Could add an error message here
            } else{
              chatHistory.value.push({ role: 'assistant', content: `${tutorResponse}` });
              talking.value = false;
            }
          });
        });
      });
    }
    speaking.value = speak;
  }
  watch(chatHistory, () => {
    nextTick(() => {
      if (scrollDiv.value) {
        scrollDiv.value.scrollTop = scrollDiv.value.scrollHeight;
      }
    });
  }, { deep: true });
  onMounted(() => {
    getUserMedia();
    console.log('mounted');
  });
</script>

