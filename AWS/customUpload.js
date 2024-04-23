const { PutObjectCommand } = require('@aws-sdk/client-s3')
const client = require('./S3')

module.exports = async (fileContent, awsKey) => {
  const params = {
    Body: fileContent,
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response= await client.send(new PutObjectCommand(params))
  return response
}
