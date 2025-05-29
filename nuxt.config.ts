import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // ТК это креды от тестинга, ничего страшного, что они в открытую лежат,
  // на проде это всё заменится продовыми через переменные окружения
  runtimeConfig: {
    clientSecret: process.env.CLIENT_SECRET || '',
    api_key: process.env.API_KEY || '',
    dbUrl: process.env.NUXT_DB_URL || '', // Railway подставит переменную окружения!
    public: {
      searchHost: process.env.NUXT_PUBLIC_SEARCH_HOST || '', // Railway подставит здесь твой адрес!
      clientId: process.env.CLIENT_ID || '',
      landing_mode: process.env.LANDING_MODE === 'true',
    },
  },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],

  css: ['@/assets/css/main.css'],

  ssr: false,

  app: {
    head: {
      script: [
        { src: '/js/lottie.js' },
        ...process.env.NODE_ENV === 'production' ? [
          { src: '/js/metric-tags.js' },
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-4B74J0SXGK',
            async: true,
          },
          ] : [],
      ],
    }
  }
})
