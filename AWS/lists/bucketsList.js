const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3")
const client = require('./S3')

module.exports = async () => {
  const data = await client.send(new ListBucketsCommand({}))
  return data.Buckets
}
