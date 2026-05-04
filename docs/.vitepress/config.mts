import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'openKPI',
  description: 'openKPI documentation',
  lang: 'en-US',
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Specification', link: '/specification/introduction' },
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
        text: 'Specification',
        items: [
          { text: 'Introduction', link: '/specification/introduction' },
          {
            text: 'Core KPI',
            link: '/specification/core-kpi',
            collapsed: false,
            items: [
              { text: 'Units of Measurement', link: '/specification/units-of-measurement' },
              { text: 'Aggregations', link: '/specification/aggregations' },
              { text: 'Time Windows', link: '/specification/time-windows' }
            ]
          },
          {
            text: 'Transport',
            collapsed: false,
            items: [
              { text: 'API', link: '/specification/transport/api' },
              { text: 'Event', link: '/specification/transport/event' }
            ]
          },
          { text: 'SDKs', link: '/specification/sdks' }
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
