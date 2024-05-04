const { DeleteObjectCommand } = require('@aws-sdk/client-s3')
const client = require('../S3')

module.exports = async (awsKey, callback) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response = await client.send(new DeleteObjectCommand(params))
  callback && callback(response)
  return response
}
