const { GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const client = require('../S3')

module.exports = async (awsKey, callback) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${awsKey}.png`
  }
  const response = await getSignedUrl(client, new GetObjectCommand(params))
  callback && callback(response)
  return response
}
