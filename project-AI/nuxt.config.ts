// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts","@pinia/nuxt"],
  
  css: [
    '@/assets/styles.scss'
  ],
  ssr: false,

  
})