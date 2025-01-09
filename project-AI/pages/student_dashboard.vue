<template>
  <div class="sm:hidden flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold text-center">Your window is too small. Please exstend the window or use a larger screen size.</h1>
  </div>
  <div class="sm:block h-5/6">
    <div class="flex">
      <div class="flex h-screen w-full justify-center card m-4 bg-accent text-primary-content">
        <div class="flex flex-col items-center justify-center">
          <div class="card bg-base-100 m-4 p-4">
            <p class="text-4xl font-bold">Hello: {{ name }}</p>
          </div>
          <div class="card bg-base-100 m-4 p-4">
            <p class="text-4xl font-bold">Today's Unique Word Count: {{ wordCount }}</p>
          </div>
          <div class="card bg-base-100 m-4 p-4">
            <p class="text-4xl font-bold">Days Completed: {{ dayscomplete }}</p>
          </div>
          <div class="card bg-secondary m-4 p-4">
            <p class="text-4xl font-bold">Choose practice topic:</p>
          </div>
          <select v-model="chosenTopic" class="select text-info text-4xl font-bold select-secondary w-full max-w-xs">
            <option  disabled selected class="text-primary">Topics</option>
            <option v-if="topics[0]" value="0">Introductions</option>
            <option v-if="topics[1]" value="1">Streaming and Digital Media</option>
            <!-- <option value="2">Intermediate</option>
            <!-- <option value="3">Intermediate High</option>
            <option value="4">Advanced Low</option>
            <option value="5">Advanced High</option> -->
          </select>
          
       </div>
      </div>
      <div class="flex w-full min-h-screen overflow-y-scroll border-l-2 h-full bg-base-100  pt-0 xl:p-10 border-gray-300 justify-center items-center">
        <div class="">
          <Button v-if="!complete && chosenTopic != 100" class="btn btn-primary mt-4 text-2xl" @click="startLesson()">
            Start Today's Lesson!
          </Button>
          <Button v-if="!complete && chosenTopic == 100" class="btn btn-primary mt-4 text-3xl" disabled>
            <p class="text-primary">choose a topic to practice!</p>
          </Button>
          <Button v-if="complete" class="btn btn-primary mt-4 text-2xl" :disabled="true">
            <p class="text-info">Good Job! Today's Lesson Complete!</p> 
          </Button>
        </div>      
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const wordCount = ref(0);
  const name = ref('');
  const chosenTopic = ref(100);
  const classCode = ref('');
  const dayscomplete = ref('');
  const complete = ref(true);
  const supabase = useSupabaseClient()
  const user = supabase.auth.getUser()
  const topics = ref<boolean[]>([]);
  //getting user ID
  import { useUserStore } from '../store/LoginStore';
  const store = useUserStore();
  async function setUserInfo(){
    await store.setUser();
    //Importing user data
    classCode.value = store.classCode;
    name.value = store.username;
    wordCount.value = store.wordCount;
    dayscomplete.value = store.daysComplete;
    
    //checking days
    complete.value = checkDay(store.daysComplete);

    //Checking if user is teacher
    if (store.teacher) {
      navigateTo('/teacher_overview');
    }
    console.log(store.topics)
    // Giving lesson choices
    topics.value = store.topics;
  }
  setUserInfo();

  function checkDay(dayscomplete: string) {
    const d = new Date();
    const weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"][d.getDay()];
    return dayscomplete.includes(weekday);
  }

  async function startLesson() {
    await store.chooseTopic(chosenTopic.value);
    navigateTo('/student_overview');
  }

</script>