const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")
const getFile = require('./getFile')
const client = require('../S3')

module.exports = (awsKeys, callback) => {
  const files = awsKeys.map(async (awsKey) => {
    const file = await getFile(awsKey)
    callback && callback(file)
    return file
  })
  return files
}
