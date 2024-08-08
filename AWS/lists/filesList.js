const {ListObjectsV2Command} = require("@aws-sdk/client-s3")

module.exports = async (configs, callback) => {
  const params = {
    Bucket: configs.bucketName
  }
  const data = await configs.client.send(new ListObjectsV2Command(params))
  const files = data.Contents.map((file) => file.Key)
  callback && callback(files)
  return files
}
