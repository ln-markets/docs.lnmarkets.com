module.exports = [
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
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
]
