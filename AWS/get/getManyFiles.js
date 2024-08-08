const getFile = require('./getFile')

module.exports = (configs, awsKeys, callback) => {
  const files = awsKeys.map(async (awsKey) => {
    const file = await getFile(configs, awsKey, callback)
    callback && callback(file)
    return file
  })
  return files
}
