import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'openKPI',
  description: 'openKPI documentation',
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Features', link: '/guide/features' },
          { text: 'Units of Measurement', link: '/guide/units-of-measurement' },
          { text: 'Aggregations', link: '/guide/aggregations' },
          { text: 'Time Windows', link: '/guide/time-windows' },
          { text: 'SDKs', link: '/guide/sdks' }
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'About', link: '/about' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openKPI' }
    ],
    footer: {
      message: 'Released under the CC-BY 4.0 License.',
      copyright: '© openKPI'
    }
  }
})
