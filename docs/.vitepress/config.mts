import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "learnStep123",
  description: "Record and share knowledge",
  base: "/learnStep/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "learnStep",
    logo: "icon.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Content", link: "learn/JS" },
    ],

    sidebar: [
      {
        text: "学习",
        items: [
          { text: "Javascript", link: "learn/JS" },
          { text: "English", link: "learn/ENG" },
        ],
      },
      {
        text: "实践",
        items: [{ text: "cli脚手架", link: "project/CLI" }],
      },
      {
        text: "分享",
        items: [{ text: "分享", link: "share/Share" }],
      },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © xxxxxxxxx",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
