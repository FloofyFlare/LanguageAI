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
  debug: true,
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

  runtimeConfig: {
    // The private keys which are only available within server-side
    google: '',
    deepInfra: '',
    azureEndpoint: '',
    azureClient: '',
    azureTenant: '',
    azureSecret: '',
    // Keys within public, will be also exposed to the client-side
  },
})