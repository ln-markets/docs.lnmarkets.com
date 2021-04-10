const { description } = require('../../package')

module.exports = {
  title: 'LN Markets Docs',
  description: description,
  bundler: '@vuepress/webpack',
  dest: 'dist',
  base: '/docs/',
  head: [
    [
      'icon',
      {
        rel: 'image/png',
        sizes: '32x32',
        href: '/docs/favicon//favicon-32x32.png',
      },
    ],
    [
      'icon',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/docs/favicon/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/docs/favicon//favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/docs/favicon/site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/docs/favicon/safari-pinned-tab.svg',
        color: '#3a0839',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/docs/favicon/browserconfig.xml',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/docs/favicon//favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0a157a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  themeConfig: {
    logo: '/assets/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 10,
    docsBranch: 'docs',
    repo: 'https://github.com/lnmarkets/docs.lnmarkets.com',
    navbar: [
      {
        text: 'App',
        link: '/app/',
      },
      {
        text: 'Trading',
        link: '/trading/',
      },
      {
        text: 'Ligthning',
        link: '/lightning/',
      },
      {
        text: 'Community',
        children: [
          {
            text: 'Twitter',
            link: 'https://twitter.com/LNMarkets',
          },
          {
            text: 'Telegram',
            link: 'https://www.t.me/lnmarkets',
          },
          {
            text: 'Mail',
            link: 'mailto:hello@lnmarkets.com',
          },
        ],
      },
      {
        text: 'LN Markets',
        link: 'https://lnmarkets.com',
      },
    ],
    sidebar: [
      {
        text: 'About us',
        link: '/about-us.md',
      },
      {
        isGroup: true,
        text: 'Application',
        children: ['/app/README.md'],
      },
      {
        isGroup: true,
        text: 'Trading',
        children: ['/trading/README.md'],
      },
      {
        isGroup: true,
        text: 'Lightning',
        children: ['/lightning/README.md'],
      },
    ],
  },
}
