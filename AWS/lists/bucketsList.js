const {ListBucketsCommand} = require("@aws-sdk/client-s3")

module.exports = async (configs, callback) => {
  const data = await configs.client.send(new ListBucketsCommand({}))
  callback && callback(data)
  return data.Buckets
}
