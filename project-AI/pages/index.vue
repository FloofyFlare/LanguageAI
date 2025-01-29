<template>
  <section class=" h-5/6 lg:h-screen  ">
    <div class="lg:flex flex-col">
      <div class="lg:flex lg:justify-center items-center lg:items-start">
        <section class=" flex lg:flex-1 flex-col text-left justify-left lg:items-left mt-16 lg:mt-32 lg:ml-32 m-2">
          <main>
            <div class="text-left justify-left">
              <p class="text-4xl lg:text-7xl font-bold text-pretty" font-family="arial">
                World Language
              </p>
            </div>
            <div class="text-left justify-left mt-4">
              <p class="text-3xl text-nowrap lg:text-7xl lg:mr-0 font-bold text-primary">
                Beyond the Classroom
              </p>
            </div>
            <div class=" mt-4 text-left">
              <p class="text-lg lg:text-2xl text-balance">
                The language tool that gets students <span class="text-primary font-bold">speaking</span> outside the classroom
              </p>
            </div>
          </main>
          <div class="hidden lg:block flex text-left justify-start items-center mt-12">
            <button>
              <ClientOnly><Waitlist/></ClientOnly>
            </button>
          </div>
          <div class="lg:hidden flex text-left justify-center items-center mt-8 md:m-20">
            <button>
              <a href="#waitlist" class="btn btn-primary text-accent text-xl w-48 h-16 rounded-3xl">Try Today!</a>
            </button>
          </div>
        </section>
        <section class="lg:flex-1">
          <div class="block sm:hidden animated-text flex mt-16 justify-center ">
            <span class="md:text-6xl"/>
          </div>
          <div class="text-center justify-center lg:justify-end">
            <div class="avatar h-full w-full lg:flex justify-center">
              <div class="w-4/5 h-4/5 p-8 ">
                <div id="ai_animation" class="h-full w-full rounded-full bg-orange-500 p-2 shadow-xl rounded-full border-8 border-gray-300 p-2"/>
              </div>
            </div>
          </div>
          <div class="hidden sm:block animated-text text-center flex justify-center">
            <span class=" md:text-7xl"/>
          </div>
          <div id="waitlist" class="block sm:hidden flex text-left justify-center sm:justify-start items-center mt-12 mb-4 sm:mb-0">
            <button class="flex justify-center">
              <ClientOnly><Waitlist/></ClientOnly>
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  useHead({
  title: 'Yuuera |  World Language Beyond the Classroom  !',
  meta: [
    {
      name: 'description',
      content:
        'The foreign language tool that helps students practice speaking outside the classroom.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
  ],
});
</script>