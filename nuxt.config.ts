import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    modules: [],
  
    // nitro: {
    //   preset: 'server',
    //   timing: true
    // },
    css: ["~/assets/css/tailwind.css"],
  });
  