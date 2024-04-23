const removeFile = require('./removeFile')

module.exports = (awsKeys, callback) => {
  const responses = awsKeys.map(async (awsKey) => {
    const response = await removeFile(awsKey)
    callback && callback(response)
    return response
  })
  return responses
}
