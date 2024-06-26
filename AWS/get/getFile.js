const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")
const client = require('../S3')

module.exports = async (awsKey, callback) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const data = await client.send(new GetObjectCommand(params))
  callback && callback(data.Body)
  return data.Body
}
