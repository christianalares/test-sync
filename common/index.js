const cpx = require('cpx')
const chalk = require('chalk')

const targets = [
  '../app1/components/_common',
  '../app2/components/_common'
]

targets.forEach(target => {
  cpx.watch('./src/components/**/*', target)
    .on('watch-ready', () => console.log(chalk.blue(`*** Watching file changes for: ${target} ***`)))
    .on('copy', e => console.log(`Copied files from ${chalk.yellow(e.srcPath)} to ${chalk.yellow(e.dstPath)}`))
})
