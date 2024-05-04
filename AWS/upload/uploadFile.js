const { PutObjectCommand } = require('@aws-sdk/client-s3')
const client = require('../S3')
const { v4: uuidv4 } = require('uuid')

module.exports = async (fileContent, callback) => {
  const awsKey = uuidv4()
  const params = {
    Body: fileContent,
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response= await client.send(new PutObjectCommand(params))
  callback && callback(response)
  return {response, awsKey}
}
