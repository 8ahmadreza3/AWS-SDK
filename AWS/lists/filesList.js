const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3")
const client = require('../S3')

module.exports = async (callback) => {
  const params = {
    Bucket: process.env.BUCKET_NAME
  }
  const data = await client.send(new ListObjectsV2Command(params))
  const files = data.Contents.map((file) => file.Key)
  callback && callback(files)
  return files
}
