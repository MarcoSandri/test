// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/resetcss.scss'],
  app: {
    head: {
      script: [
        { src: '@/assets/js/lenis.js' }
      ],
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/main.scss";`,
        }
      }
    }
  }
})
