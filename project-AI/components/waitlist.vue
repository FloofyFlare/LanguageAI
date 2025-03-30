<template>
  <div class="bg-accent rounded-3xl pt-4 pb-4">
    <h1 v-show="showButton" class="text-primary font-bold text-2xl">
      Try for Free!
    </h1>
    <h2 v-show="showButton" class="w-full pr-12 pl-12 text-info">
      Provide your email and we'll get you started.
    </h2>
    <div class="form-control">
      <div
        v-show="showButton"
        class="text-input-button input-group flex justify-center pt-6"
      >
        <form @submit.prevent="handleSubmit">
          <input
            v-model="signUpEmail"
            placeholder="example@gmail.com"
            type="email"
            class="input input-bordered mb-2"
            @keyup.enter="handleSubmit"
          >
          <button
            type="submit"
            class="btn button no-animation bg-primary"
          >
            <p class="md:hidden text-accent">Join the beta!</p>
            <p class="hidden md:flex  text-accent">Join the beta!</p>
          </button>
        </form>
      </div>
      <div v-show="showThanks" class="w-full flex justify-center">
        <div>
          <h1 class="text-primary font-bold text-xl">
            Thank you for your interest 🎉 You'll get a email with instructions to start as soon as possible (less than 24hrs).
          </h1>
          <h2 class="w-full pr-12 pl-12">
            Join our
            <a
              class="text-error text-bold text-lg"
              href="https://twitter.com/YuueraOfficial"
              >twitter</a
            >
            Provide your email and we'll get you started.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const signUpEmail = ref('')
const showButton = ref(true)
const showThanks = ref(false)
function handleSubmit() {
  if (validateEmail(signUpEmail.value)) {
    handleSend()
  }
}

async function handleSend() {
  const supabase = useSupabaseClient()
  showButton.value = false
  showThanks.value = true
  console.log(signUpEmail.value)

  const emailProvided = { email: signUpEmail.value }

  const { data, error } = await supabase
    .from('Email List')
    .insert([
      { email: emailProvided },
    ])
    .select()
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
</script>