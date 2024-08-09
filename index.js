const aws = require('./AWS')
const fs = require('fs')

const file = fs.readFileSync('')
const client = new aws({
  endpoint: '',
  bucketName: '',
  accessKey: '',
  secretKey: '',
  bucketURL: '',
})

console.log(client.upload(file, console.log))

module.exports = aws