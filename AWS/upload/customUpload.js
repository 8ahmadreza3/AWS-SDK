const { PutObjectCommand } = require('@aws-sdk/client-s3')

module.exports = async (configs, fileContent, awsKey, callback) => {
  const params = {
    Body: fileContent,
    Bucket: configs.bucketName,
    Key: `${awsKey}.png`
  }
  const response= await configs.client.send(new PutObjectCommand(params))
  callback && callback(response)
  return response
}
