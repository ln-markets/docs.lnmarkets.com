const { navbar, sidebar, head } = require('./configs')
const chokidar = require('chokidar')
const { chalk, logger } = require('@vuepress/utils')

module.exports = {
  title: 'LN Markets Docs',
  description: 'LN Markets Documentation',
  bundler: '@vuepress/webpack',
  dest: 'dist',
  base: '/docs/',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'LN Markets Docs',
      description: 'LN Markets Documentation',
    },
    '/es/': {
      lang: 'es-ES',
      title: 'LN Markets Docs',
      description: 'LN Markets Documentación',
    }
  },
  themeConfig: {
    darkMode: true,
    logo: '/assets/logo.png',
    editLinks: false,
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectedLanguageName: 'English',
      },
      '/es/': {
        navbar: navbar.es,
        sidebar: sidebar.es,
        selectedLanguageName: 'Español'
      }
    },
    themePlugins: {
      git: process.env.NODE_ENV === 'production',
    },
  },
  onWatched: (_, watchers, restart) => {
    const watcher = chokidar.watch('configs/**/*.js', {
      cwd: __dirname,
      ignoreInitial: true,
    })
    watcher.on('change', async (file) => {
      logger.info(`file ${chalk.magenta(file)} is modified`)
      await restart()
    })
    watchers.push(watcher)
  },
}
