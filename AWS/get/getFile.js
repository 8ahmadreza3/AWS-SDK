const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")
const client = require('../S3')

module.exports = async (awsKey) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: awsKey
  }
  const data = await client.send(new GetObjectCommand(params))
  return data.Body
}
