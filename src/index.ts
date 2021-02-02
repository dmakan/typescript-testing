const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log('Started index.ts...')

console.log('Entered inputs:')
console.log(`username: ${argv.username}`)
console.log(`password: ${argv.password}`)
