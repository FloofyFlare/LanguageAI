<template>
  <div class="sm:hidden flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold text-center">Your window is too small. Please exstend the window or use a larger screen size.</h1>
  </div>
  <div class="hidden sm:block h-5/6">
    <div class="flex h-full">
      <div class="flex justify-center items-center">
         <div class="w-full h-full">
          <div class="card m-4 bg-accent text-primary-content">
            <form class="card-body pb-16" @submit.prevent="handleSubmit">
              <h2 class="font-bold text-2xl p-4 underline">Current Class Topic</h2>
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Time</h2>
                </div>
                <select v-model="time" class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose time</option>
                  <option value="0">5 min</option>
                  <option value="1">10 min</option>
                  <option value="2">15 min</option>
                  <option value="3">20 min</option>
                </select>
              </div>
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Difficulty</h2>
                </div>
                <select v-model="difficulty" class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose difficulty</option>
                  <!-- <option value="0">Novice</option>
                  <option value="1">Novice High</option> -->
                  <option value="2">Intermediate</option>
                  <!-- <option value="3">Intermediate High</option>
                  <option value="4">Advanced Low</option>
                  <option value="5">Advanced High</option> -->
                </select>
              </div>
              
              <div class="flex items-center justify-center">
                <h2 class="font-bold text-2xl pr-4 pt-16">Class Topic</h2>
              </div>
              <!-- <select v-model="classtopic" class=" select text-info text-lg select-secondary w-full max-w-xs">
                <option disabled selected>choose topic</option>
                <option value="0" class="checkbox">Introductions</option>
                <option value="1">(NEW) Streaming and Digital Media</option>
                          <option value="2">Free Style</option>
                        <option value="3">Tell me about yourself</option> 
              </select> -->
              <div tabindex="0" class="collapse bg-base-200">
                <input type="checkbox" />
                <div class="collapse-title text-xl flex font-medium bg-base-100 border-2">
                  Topics 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <div class="collapse-content bg-base-100">
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <span class="label-text text-lg">Introductions</span>
                      <input v-model="classLesson[0]" type="checkbox" :checked="classLesson[0]" class="checkbox checkbox-info" />
                    </label>
                    <label class="cursor-pointer label">
                      <span class="label-text text-lg">(NEW) Streaming and Digital Media</span>
                      <input v-model="classLesson[1]" type="checkbox" :checked="classLesson[1]" class="checkbox checkbox-info" />
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-center">
                <h2 class="font-bold text-2xl pr-4 pt-16">Word Bank</h2>
              </div>
              <textarea v-model="wordbank" class="textarea text-info text-lg h-full textarea-bordered resize-none" placeholder="Enter" style="resize: none;"/>
              <div class="flex items-center justify-center">
                <button type="submit" class="btn btn-primary w-1/3 text-base-100">Apply</button>
              </div>
              
            </form>
          </div>
          <div class="rounded-2xl m-4 bg-primary text-primary-content flex">
            <p class="w-1/2 p-4 text-base-100 text-center text-2xl">Class code</p>
            <div class="bg-base-100 p-4 m-2 rounded-2xl">
              <p class="">{{ classCode }}</p>
            </div>
          </div>
         </div>
      </div>
      <div class="w-full min-h-screen overflow-y-scroll border-l-2 h-full bg-base-100  pt-0 xl:p-10 border-gray-300">
        <div v-for="{ name, dayscomplete, uniquewords} in students" :key="id" class="card w-screen lg:w-full mt-10 bg-base-100 hover:bg-neutral shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4 w-36">{{ name }}</h2>
                  <h2 class="font-bold text-lg pr-4 ">Days Practiced:</h2>
                  <div class="flex items-center justify-center">
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'Sa')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">S</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'M')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">M</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'Tu')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">T</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'W')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">W</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'Th')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">T</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'F')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">F</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(dayscomplete, 'Su')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">S</h2>
                  </div>
                  <h2 class="font-bold text-lg pl-4 ">Lastest Assignment's Unique words: {{ uniquewords }}</h2>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

  import { ref } from 'vue';
  
  const students = ref<Students[]>([]);
  const teacher = ref<Teacher>({} as Teacher);
  const time = ref('0');
  const difficulty = ref('0');
  const classtopic = ref('choose topic');
  const wordbank = ref('');
  const classLesson = ref([false, false, false, false, false, false]);
  const classCode = ref('');
  const supabase = useSupabaseClient()
  const user = supabase.auth.getUser()
  //getting user ID
  const userId = ref<string>('');
  TeacherInput()
  async function pullUserData() {
    const { data, error } = await user;
    if (error) {
      console.log(error);
    } else {
      userId.value = data.user.id;
    }
  }
  

  async function TeacherInput() {
    await pullUserData();
    const { data, error } = await supabase
      .from('Classrooms')
      .select('classcode, difficulty, wordbank, time, classtopic,topics')
      .eq('teacher', "" + userId.value) 
    console.log(data)
    
    if (data && data.length > 0) {
      time.value = data[0].time;
      classCode.value = data[0].classcode;
      difficulty.value = data[0].difficulty;
      wordbank.value = data[0].wordbank;
      classtopic.value = data[0].classtopic;
      classLesson.value = data[0].topics;
      studentInput();
    } else {
      navigateTo('/student_dashboard');
    }
  }
  
  interface Students {
    User: string;
    classcode: string;
    dayscomplete: string;
    name: number;
    teacher: boolean;
    uniquewords: number;
  }
  interface Teacher {
    id: number;
    name: string;
    Time: number;
    Difficulty: number;
    ClassTopic: string;
    words: string;
  }


  
  
  async function studentInput() {
    const { data, error } = await supabase
      .from('UserData')
      .select('User, classcode, dayscomplete, name, teacher, uniquewords')
      .eq('classcode', classCode.value)
      .eq('teacher', false)

    
    data?.forEach((student) => {
      students.value.push({
        User: student.User,
        classcode: student.classcode,
        dayscomplete: student.dayscomplete,
        name: student.name,
        teacher: student.teacher,
        uniquewords: student.uniquewords,
      });
    });
    
    teacher.value = {
      id: 0,
      name: 'some teacher',
      Time: 0,
      Difficulty: 0,
      ClassTopic: 'General Conversation',
      words: ""
    };
  }

  function DaysCompleteTranslate(student:string, day:string) : string {
    if (student.includes(day)){
      return 'bg-success'
    } else {
      return ''
    }
  }
  

  async function handleSubmit() {
    const { data, error } = await supabase
      .from('Classrooms')
      .update(
        { time: time.value ,
         difficulty: difficulty.value ,
         classtopic: classtopic.value ,
         wordbank: wordbank.value,
         topics: classLesson.value
        }
      )
      .eq('classcode', classCode.value)
      console.log(data);
  }

</script>