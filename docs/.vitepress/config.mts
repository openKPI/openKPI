import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '🎯 openKPI',
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
      {
        text: 'Specification',
        items: [
          { text: 'Introduction', link: '/specification/introduction' },
          { text: 'Core', link: '/specification/core/' },
          { text: 'Transport', link: '/specification/transport/' }
        ]
      },
      { text: 'SDKs', link: '/sdks/introduction' },
      { text: 'Examples', link: '/examples/financial-kpis' },
      { text: 'About', link: '/more/about' }
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
            text: 'Core',
            link: '/specification/core/',
            collapsed: false,
            items: [
              { text: 'Units of Measurement', link: '/specification/core/units-of-measurement' },
              { text: 'Aggregation', link: '/specification/core/aggregation' },
              { text: 'Time Window', link: '/specification/core/time-window' }
            ]
          },
          {
            text: 'Transport',
            link: '/specification/transport/',
            collapsed: false,
            items: [
              { text: 'API', link: '/specification/transport/api' },
              { text: 'Event', link: '/specification/transport/event' }
            ]
          }
        ]
      },
      {
        text: 'SDKs',
        items: [
          { text: 'Introduction', link: '/sdks/introduction' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Financial KPIs', link: '/examples/financial-kpis' },
          { text: 'KPIs for Energy Suppliers', link: '/examples/energy-suppliers' },
          { text: 'E-commerce KPIs', link: '/examples/ecommerce' }
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'About', link: '/more/about' }
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
