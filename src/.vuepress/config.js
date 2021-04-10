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
  themeConfig: {
    navbar,
    sidebar,
    logo: '/assets/logo.png',
    editLinks: false,
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
