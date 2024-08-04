<template>
  <body class="bg-base-100 md:w-full h-screen">
    <main class="h-full">
      <section>
        <div class="flex justify-center">
          <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div class="text-center lg:text-left">
                <h1 class="text-primary text-5xl font-bold">Login!</h1>
                <p class="text-primary">Or create an account</p>
                <div class="flex-col justify-center">
                  <NuxtLink to="/signup" class="btn mt-8 btn-primary text-neutral"
                    >Create an account?</NuxtLink
                  >
                </div>
              </div>
              <div class="card shrink-0 w-full max-w-sm shadow-2xl border-2 border-primary bg-base-100">
                <form class="card-body" @submit.prevent="handleSubmit">
                  <span v-show="badInput" class="text-error"
                    >Email and/or password is either missing or inccorect</span
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
                    />
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
                    />
                    <label class="label">
                      <NuxtLink
                        href="Productpage"
                        class="label-text-alt link link-hover"
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
        </div>
        </section>
      </main>
    </body>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/LoginStore'

const store = useAuthStore()

if (process.client) {
  store.refreshAccessToken()
  if (store.accessToken != null) {
  }
}

const signUpEmail = ref('')
const pass = ref('')
const badInput = ref(false)
function handleSubmit() {
  if (validateEmail(signUpEmail.value)) {
    handleSend()
  }
}

async function handleSend() {
  console.log(signUpEmail.value)

  const data = {
    email: signUpEmail.value,
    password: pass.value,
  }

  try {
    // Change the URL to your production server
    const response = await fetch('https://api.yuuera.com/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const responseData = await response.json()
      const tokens = {
        accessToken: responseData.access,
        refreshToken: responseData.refresh,
      }
      store.setTokens(tokens)
      console.log('Login successful:', store.accessToken)
      // Do something with the responseData, such as updating the component state
      await store.getAccount()

      return responseData
    } else {
      // Handle errors for non-2xx status codes
      console.error('Login failed:', response.statusText)
      badInput.value = true
    }
  } catch (error) {
    badInput.value = true
    console.error(error)
  }
}

const validateEmail = (email: string) => {
  if (typeof email !== 'string') {
    throw new TypeError('Email must be a string')
  }
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
</script>

