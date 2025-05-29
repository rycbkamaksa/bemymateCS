import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // ТК это креды от тестинга, ничего страшного, что они в открытую лежат,
  // на проде это всё заменится продовыми через переменные окружения
  runtimeConfig: {
    clientSecret: '7uGxzvJbIk8aoIvFuXkqitbz1Zg3Pw90dZUGTebn',
    api_key: 'ca4504fa-e1fd-45bc-8334-7e7f79d748f0',
    dbUrl: 'mongodb://root:example@localhost:27017/',
    public: {
      searchHost: 'localhost:5176',
      clientId: '5d6ba553-3a2b-493f-8ba7-ecd1c541c4ce',
      landing_mode: false,
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
