const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3")
const client = require('../S3')

module.exports = async (callback) => {
  const data = await client.send(new ListBucketsCommand({}))
  callback && callback(data)
  return data.Buckets
}
