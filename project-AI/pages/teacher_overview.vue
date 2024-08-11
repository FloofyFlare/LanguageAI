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
                  <option value="4">25 min</option>
                  <option value="5">30 min</option>
                </select>
              </div>
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Difficulty</h2>
                </div>
                <select v-model="difficulty" class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose difficulty</option>
                  <option value="0">Novice</option>
                  <option value="1">Novice High</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Intermediate High</option>
                  <option value="4">Advanced Low</option>
                  <option value="5">Advanced High</option>
                </select>
              </div>
              
              <div class="flex items-center justify-center">
                <h2 class="font-bold text-2xl pr-4 pt-16">Class Topic</h2>
              </div>
              <select v-model="classTopic" class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose topic</option>
                  <option value="0">Free Style</option>
                  <option value="1">Classroom Chat</option>
                  <option value="2">Introuductions</option>
                  <option value="3">Tell me about yourself</option>
                </select>
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
      <div class="w-full min-h-screen overflow-y-scroll border-l-2 h-full bg-base-100  pt-0 lg:p-10 border-gray-300">
        <div v-for="{ name, DaysComplete, id} in students" :key="id" class="card w-full mt-10 bg-base-100 hover:bg-neutral shadow-xl border-2 border-gray-300">
          <div class="card-body">
            <div class="flex w-full  ">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4 w-36">{{ name }}</h2>
                  <div class="flex items-center justify-center">
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'Sa')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">S</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'M')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">M</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'Tu')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">T</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'W')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">W</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'Th')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">T</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'F')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">F</h2>
                    <h2 :class="`border-2 border-gray-300 ${DaysCompleteTranslate(DaysComplete, 'Su')} rounded-full pl-3 ml-3 font-bold text-2xl pr-4`">S</h2>
                  </div>
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
  const classTopic = ref('choose topic');
  const classCode = ref('123456');
  interface Students {
    id: number;
    name: string;
    DaysComplete: string;
    Teacher: number;
  }
  interface Teacher {
    id: number;
    name: string;
    Time: number;
    Difficulty: number;
    ClassTopic: String;
  }

  testInput();
  function testInput() {
    students.value = [
      { id: 0, name: 'David', DaysComplete: 'Su', Teacher: 0 },
      { id: 1, name: 'Raymond', DaysComplete: 'Sa', Teacher: 0 },
    ];

    teacher.value = {
      id: 0,
      name: 'some teacher',
      Time: 0,
      Difficulty: 0,
      ClassTopic: 'General Conversation'
    };
  }

  function DaysCompleteTranslate(student:string, day:string) : string {
    if (student.includes(day)){
      return 'bg-success'
    } else {
      return ''
    }
  }

  function handleSubmit() {}
</script>