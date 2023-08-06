// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  devtools: { enabled: false },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  plugins: ["@/plugins/fontawesome.ts"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Tanuki Moon Site",
      meta: [{ name: "description", content: "TanukiMoon Portfolio site." }],
      link: [
        { rel: "icon", href: "/icon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap",
        },
      ],
    },
  },
});
