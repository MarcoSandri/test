// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/resetcss.scss'],
  runtimeConfig: {
    public: {
      cmsUrl: 'http://192.168.1.66:1337',
      menu: false,
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
