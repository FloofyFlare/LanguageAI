// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: ['/', '/privacy'],
      cookieRedirect: false,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxtjs/supabase"
  ],
  
  css: [
    '@/assets/styles.scss'
  ],
  nitro: {
    azure: {
      config: {
        // ...
        platform: {
          apiRuntime: 'node:20.15.0'
        }
      }
    }
  }
  runtimeConfig: {
    // The private keys which are only available within server-side
    google: '',
    deepInfra: '',
    azureEndpoint: '',
    azureClient: '',
    azureTenant: '',
    azureSecret: '',
    azureKey: '',
    // Keys within public, will be also exposed to the client-side
  },
})