<template>
  <div class="md:flex">
  <div class="flex flex-col text-left justify-left items-left mt-20 ml-24 ">
    <div class="text-left justify-left">
      <p class="text-xl md:text-4xl font-bold text-pretty">
        World Language Class
      </p>
    </div>
    <div class="text-left justify-left mt-6">
      <p class="text-3xl text-nowrap md:text-4xl pr-96 md:mr-0 font-bold text-primary">
        Beyond the Classroom
      </p>
    </div>
    <div>
      <p class="text-sm text-balance">
        The language tool that gets students speaking outside the classroom 
      </p>
    </div>
  </div>
    <div class="text-left justify-left mt-12 ml-24">
      <button>
        <NuxtLink to="/login" class="btn btn-primary">Sign up for free</NuxtLink>
      </button>
    </div>
  
    <div class="text-center justify-right">
      <div class="avatar h-full w-full flex justify-center ml-60 invisible md:visible">
        <div class="w-2/4 h-2/4 ">
          <div class="h-1/2 w-1/2 rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2" id="ai_animation"></div>
        </div>
      </div>
    </div>

  </div>
  <div class="bg-neutral text-info text-center">
    <p class="text-3xl font-bold">
      Practicing Speaking Doesn't need to Stop Outside the Classroom
    </p>
  </div>

  <div class="mt-36 flex justify-center items-center">
    <div class="w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg">
    </div>
    <div class="flext jusify-center items-center ml-6">
    <p class="text-xl font-bold text-left">The One of a kind Speaking trainer </p>
    
    <p class="mt-2 text-sm text-pretty">
       Students can talk 24/7 with a private language partner that works at their pace.
    </p>
    </div>
    </div>
  
  <div class="mt-64">
    <div class="flex justify-left items-center">
         <div class="h-full ml-16">
          <div class="card m-10 h-2/3 bg-accent text-primary-content">
            <div class="card-body">
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Time</h2>
                </div>
                <select class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose time</option>
                  <option>5 min</option>
                  <option>10 min</option>
                  <option>15 min</option>
                  <option>20 min</option>
                  <option>25 min</option>
                  <option>30 min</option>
                </select>
              </div>
              <div class="flex w-full p-2">
                <div class="flex items-center justify-center">
                  <h2 class="font-bold text-2xl pr-4">Difficulty</h2>
                </div>
                <select class="select text-info text-lg select-secondary w-full max-w-xs">
                  <option disabled selected>choose difficulty</option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </select>
              </div>
              
              <div class="flex items-center justify-center">
                <h2 class="font-bold text-2xl pr-4 pt-16">Class Topic</h2>
              </div>
              <textarea class="textarea text-info text-lg h-full textarea-bordered resize-none" placeholder="Enter" style="resize: none;"></textarea>
              <div class="flex items-center justify-center">
                <button class="btn btn-primary w-1/3 text-base-100">Filter</button>
              </div>
            </div>
          </div>
         </div>
    <div class="flext jusify-center items-center">
      <p class="text-3xl font-bold">
        Customizable speaking lessons
      </p>      
      <p class="text-sm mt-6 text-balance">
        You know your class better than anyone. That's why Yuuera allows you to choose the length, difficulty, and topics, and target vocab for every speaking assignment!
      </p>
      </div>
      </div>
  </div>


  <div class="flex justify-left items-center">
    <div class="flext jusify-center items-center">
      <p class="text-3xl font-bold">
        Built-in Context clues   
      </p>      
      <p class="text-sm text-balance mt-2">
        With a simple click students are given context clues helping them on their language learning journey.
      </p>
    </div>
    <div class="w-1/3">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg">
    </div>
  </div>


  <div class="text-center bg-accent rounded-3xl mt-48">
    <p class="font-bold text-3xl text-balance mt-12">
      Lets Teach the Next Generation of Confident 2nd language Speakers
    </p>
  </div>
</template>
<script setup lang="ts">

</script>