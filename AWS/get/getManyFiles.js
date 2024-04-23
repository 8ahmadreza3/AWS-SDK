const getFile = require('./getFile')

module.exports = (awsKeys, callback) => {
  const files = awsKeys.map(async (awsKey) => {
    const file = await getFile(awsKey)
    callback && callback(file)
    return file
  })
  return files
}
