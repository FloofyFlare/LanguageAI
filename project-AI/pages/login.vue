<template>
  <body class="bg-base-100 md:w-full h-screen">
    <main class="h-full">
      <section class="flex h-full">
          <div class="hero bg-base-100 h-4/5">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div class="text-center lg:text-left">
                <h1 class="text-primary text-5xl font-bold">Login!</h1>
                <p class="hidden text-primary">Or create an account</p>
                <div class="hidden flex-col justify-center">
                  <NuxtLink to="/" class="btn mt-8 btn-primary text-neutral"
                    >Create an account?</NuxtLink
                  >
                </div>
              </div>
              <div class="card shrink-0 w-full max-w-sm shadow-2xl border-2 border-primary bg-base-100">
                <form class="card-body" @submit.prevent="signInWithPassword">
                  <span v-show="badInput" class="text-error"
                    >Email and/or password is either missing or incorrect</span
                  >
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      v-model="signUpEmail"
                      type="email"
                      placeholder="email"
                      class="input input-bordered"
                      required
                    >
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      v-model="pass"
                      type="password"
                      placeholder="password"
                      class="input input-bordered"
                      required
                    >
                    <label class="label">
                      <NuxtLink
                        to="/"
                        class="hidden label-text-alt link link-hover"
                        >Forgot password?</NuxtLink
                      >
                    </label>
                  </div>
                  <div class="form-control mt-6">
                    <button type="submit" class="btn btn-primary text-neutral">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
</template>
<script setup lang="ts">
import { ref } from 'vue'


const user = useSupabaseUser()
const supabase = useSupabaseClient()
const usercheck = supabase.auth.getUser()
const userId = ref<string>('');
  //getting user ID
const signUpEmail = ref('')
const pass = ref('')
const badInput = ref(false)
supabase.auth.getUser();

const signInWithPassword = async () => {
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email: signUpEmail.value,
    password: pass.value,
  })
  if (error) console.log(error); badInput.value = true;
  if (data) {
    console.log(data);
    if (user.value) {
      reloadNuxtApp();
    }
  }
}

TeacherInput()
async function pullUserData() {
  const { data, error } = await usercheck;
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
    .select('classcode, difficulty, wordbank, time, classtopic')
    .eq('teacher', "" + userId.value) 
  console.log(data)
  
  if (data && data.length > 0) {
    navigateTo('/teacher_overview');
  } else {
    navigateTo('/student_dashboard');
  }
}
</script>

