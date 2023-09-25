// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    'element-plus/dist/index.css'    // 1.在 css 中配置 element-ui 的 css 位置
  ],
})