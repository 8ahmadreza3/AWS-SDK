const { PutObjectCommand } = require('@aws-sdk/client-s3')
const { v4: uuidv4 } = require('uuid')

module.exports = async (configs, fileContent, callback) => {
  const awsKey = uuidv4()
  const params = {
    Body: fileContent,
    Bucket: configs.bucketName,
    Key: `${awsKey}.png`
  }
  const response= await configs.client.send(new PutObjectCommand(params))
  callback && callback(response)
  return {response, awsKey}
}
