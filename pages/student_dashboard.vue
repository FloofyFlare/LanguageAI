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
          <div class="card bg-base-100 m-4 p-4">
            <p class="text-4xl font-bold">Todays Topic: {{ classLesson }}</p>
          </div>
          
       </div>
      </div>
      <div class="flex w-full min-h-screen overflow-y-scroll border-l-2 h-full bg-base-100  pt-0 xl:p-10 border-gray-300 justify-center items-center">
        <div class="">
          <NuxtLink class="btn btn-primary mt-4 text-2xl" v-if="!complete" to="/student_overview">
            Lets Start Today's Lesson!
          </NuxtLink>
          <Button class="btn btn-primary mt-4 text-2xl" v-if="complete" :disabled="true">
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
  const classCode = ref('');
  const dayscomplete = ref('');
  const classLesson = ref('');
  const complete = ref(true);
  const supabase = useSupabaseClient()
  const user = supabase.auth.getUser()
  //getting user ID
  const userId = ref<string>('');
  studentInput()
  async function pullUserData() {
    const { data, error } = await user;
    if (error) {
      navigateTo('/login');
    } else {
      userId.value = data.user.id;
    }
  }
  

  async function checkStudent() {
    const { data, error } = await supabase
      .from('Classrooms')
      .select('classcode,classtopic')
      .eq('classcode', "" + classCode.value) 
    studentInput();
    if (data && data.length > 0) {
      if (data[0].classtopic == '0') {
        classLesson.value = "Free Style";
      } 
    }
  }
  
  async function studentInput() {
    await pullUserData();
    const { data, error } = await supabase
      .from('UserData')
      .select('User, classcode, dayscomplete, name, teacher, uniquewords')
      .eq('User', userId.value)
      .eq('teacher', false)
      
      if (data && data.length > 0) {
        name.value = data[0].name;
        wordCount.value = data[0].uniquewords;
        dayscomplete.value = data[0].dayscomplete;
        classCode.value = data[0].classcode;
      } else {
        navigateTo('/teacher_overview');
        return;
      } 
      
      complete.value = checkDay(dayscomplete.value);
      checkStudent();
  }

  function checkDay(dayscomplete: string) {
    const d = new Date();
    const weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"][d.getDay()];
    return dayscomplete.includes(weekday);
  }

</script>