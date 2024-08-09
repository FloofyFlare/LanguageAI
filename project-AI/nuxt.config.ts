// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts", "@pinia/nuxt"],
  
  css: [
    '@/assets/styles.scss'
  ],

  runtimeConfig: {
    // The private keys which are only available within server-side
    google: '',
    deepInfra: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      google: '',
      deepInfra: '',
    }
  }
  
})