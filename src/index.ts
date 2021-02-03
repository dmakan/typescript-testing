const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log('Started index.ts...')

console.log('Entered inputs:')
console.log(`username: ${argv.username}, length: ${argv.username.length}`)
console.log(`password: ${argv.password}, length: ${argv.password.length}`)
console.log(`process.env.PASSWORD: ${process.env.PASSWORD}`)
