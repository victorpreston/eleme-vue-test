// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   app: {
      head: {
         meta: [
            {
               name: "description",
               content: "Front-End Test Elemes group slicing figma to nuxt",
            },
         ],
         title: "Front-End Test",
      },
   },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ["@nuxtjs/google-fonts", "nuxt-rating"],
   googleFonts: {
      families: {
         Rubik: {
            wght: [400, 500, 600, 700],
         },
      },
   },
});
