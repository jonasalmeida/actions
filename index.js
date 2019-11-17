console.log(`hello actions at ${Date()}`)
fs = require('fs')
fs.writeFileSync('./lala.txt',`Hello lala at ${Date()}`)
console.log(`saved lala.txt at ${Date()}`)