const { DeleteObjectCommand } = require('@aws-sdk/client-s3')

module.exports = async (configs, awsKey, callback) => {
  const params = {
    Bucket: configs.bucketName,
    Key: `${awsKey}.png`
  }
  const response = await configs.client.send(new DeleteObjectCommand(params))
  callback && callback(response)
  return response
}
