const removeFile = require('./removeFile')

module.exports = (configs, awsKeys, callback) => {
  const responses = awsKeys.map(async (awsKey) => {
    const response = await removeFile(configs, awsKey)
    callback && callback(response)
    return response
  })
  return responses
}
