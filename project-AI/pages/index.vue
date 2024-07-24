<template>
  <section class=" h-5/6 lg:h-screen  ">
    <div class="lg:flex flex-col">
      <div class="lg:flex lg:justify-center items-center lg:items-start">
        <section class=" flex lg:flex-1 flex-col text-left justify-left lg:items-left mt-16 lg:mt-32 lg:ml-32 m-2">
          <div class="text-left justify-left">
            <p class="text-4xl md:4xl lg:text-6xl font-bold text-pretty">
              World Language
            </p>
          </div>
          <div class="text-left justify-left mt-4">
            <p class="text-3xl md:4xl text-nowrap lg:text-6xl lg:mr-0 font-bold text-primary">
              Beyond the Classroom
            </p>
          </div>
          <div class=" mt-4 text-left">
            <p class="text-lg lg:text-2xl text-balance">
              The language tool that gets students <span class="text-primary font-bold">speaking</span> outside the classroom
            </p>
          </div>
          <div class="hidden lg:block flex text-left justify-start items-center mt-12">
            <button>
              <Waitlist></Waitlist>
            </button>
          </div>
          <div class="lg:hidden flex text-left justify-center items-center mt-8 md:m-20">
            <button>
              <a href="#waitlist" class="btn btn-primary text-accent text-xl w-48 h-16 rounded-3xl">Join the waitlist!</a>
            </button>
          </div>
        </section>
        <section class="lg:flex-1">
          <div class="block sm:hidden animated-text flex mt-16 justify-center ">
            <span class="md:text-6xl"></span>
          </div>
          <div class="text-center justify-center lg:justify-end">
            <div class="avatar h-full w-full lg:flex justify-center">
              <div class="w-4/5 h-3/5 p-4 mb-4">
                <div class="h-full w-full rounded-full bg-orange-500 p-2 shadow-2xl rounded-full border-8 border-gray-300 p-2" id="ai_animation"></div>
              </div>
            </div>
          </div>
          <div class="hidden sm:block animated-text text-center flex justify-center">
            <span class=" md:text-6xl"></span>
          </div>
          <div id="waitlist" class="block sm:hidden flex text-left justify-center sm:justify-start items-center mt-12 mb-4 sm:mb-0">
            <button class="flex justify-center">
              <Waitlist></Waitlist>
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
 <section class="hidden">
      <div class="bg-neutral bg-opacity-50 text-center p-8 rounded-lg mt-24">
        <p class="text-3xl font-bold text-neutral-content">
          Practicing Speaking Doesn't need to Stop Outside the Classroom
        </p>
      </div>

      <div class="mt-36 ml-24 lg:ml-0 lg:flex justify-center items-center">
        <div class="lg:flex items-center mb-12 lg:mb-0">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" class="w-1/2 h-1/2">
        </div>
        <div class="flex flex-col items-start mr-24 ">
          <p class="text-xl font-bold text-wrap">The One of a kind Speaking trainer</p>
          <p class="text-sm text-pretty text-balance mt-2">
            Students can talk 24/7 with a private language partner that works at their pace.
          </p>
        </div>
        
      </div>
  </section>
  <section class="hidden"> 
    <div class="mt-64">
      <div class="lg:flex justify-center items-center">
          <div class="h-full mr-6">
            <div class="card m-10 h-3/4 bg-accent text-primary-content">
              <div class="card-body h-full">
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
      <div class="lg:flex lg:flex-col jusify-left items-left">
        <p class="text-3xl text-center lg:text-left text-balance font-bold mt-2">
          Customizable speaking lessons
        </p>      
        <p class="text-xs lg:text-sm mt-2 text-center text-wrap">
          You know your class better than anyone. That's why Yuuera allows you to choose the length, difficulty, and topics, and target vocab for every speaking assignment!
        </p>
        </div>
        </div>
    </div>
  </section>
  <section class="hidden">
    <div class="text-left justify-center items-center mt-20 ml-24 lg:invisible">
        <button>
          <NuxtLink to="/login" class="btn btn-primary text-accent text-xl w-48 h-16 rounded-3xl">Sign up for free</NuxtLink>
        </button>
      </div>
      <div class="w-1/3 mt-12 items-center justify-center ml-24 lg:invisible">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg">
      </div>


    <div class="lg:flex justify-center items-center lg:justify-left lg:items-left mt-12">
      <div class="flext jusify-center lg:justify-left items-center lg:items-left">
        <p class="text-3xl font-bold text-center items-center lg:text-left lg:justify-left lg:items-left">
          Built-in Context clues   
        </p>      
        <p class="text-sm text-balance mt-2 text-center lg:text-left lg:justify-left text mt-16">
          With a simple click students are given context clues helping them on their language learning journey.
        </p>
      </div>
      <div class="w-1/4 h-1/4 mt-12 items-center justify-center ml-24  invisible lg:visible">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg">
      </div>

    </div>


    <div class="text-center bg-accent rounded-3xl mt-56">
      <div class="flex text-center justify-center text-balance">
      <p class="font-bold text-2xl text-balance mt-12">
        Teach the Next Generation of <p class="text-primary">Confident</p> 2nd language Speakers
      </p>
    </div>
      <div class="text-left justify-left lg:justify-center lg:items-center mt-12 ml-24 lg:ml-96">
        <button>
          <NuxtLink to="/login" class="btn btn-primary text-accent text-xl w-48 mb-2 lg:ml-96  h-16 rounded-3xl">Sign up for free</NuxtLink>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>