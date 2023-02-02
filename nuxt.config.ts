
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: 'http://192.168.1.66:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
  css: ['@/assets/scss/resetcss.scss'],
  runtimeConfig: {
    public: {
      cmsUrl: 'http://192.168.1.66:1337',
      menu: false,
      currentLang: 'en'
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
