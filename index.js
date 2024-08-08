const aws = require('./AWS')
const fs = require('fs')

const file = fs.readFileSync('')
const client = new aws({
  endpoint: 'https://storage.iran.liara.space',
  bucketName: 'kara-library',
  accessKey: '59goe5pft0b35084',
  secretKey: '82f9397e-9a12-463c-a860-1333253db49a',
  bucketURL: 'https://kara-library.storage.iran.liara.space/',
})

console.log(client.upload(file, console.log))

module.exports = aws