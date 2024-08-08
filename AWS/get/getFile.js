const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")

module.exports = async (configs, awsKey, callback) => {
  const params = {
    Bucket: configs.bucketName,
    Key: `${awsKey}.png`
  }
  const data = await configs.client.send(new GetObjectCommand(params))
  callback && callback(data.Body)
  return data.Body
}
