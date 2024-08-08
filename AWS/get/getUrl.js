const { GetObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

module.exports = async (configs, awsKey, callback) => {
  const params = {
    Bucket: configs.bucketName,
    Key: `${awsKey}.png`
  }
  const response = await getSignedUrl(configs.client, new GetObjectCommand(params))
  callback && callback(response)
  return response
}
