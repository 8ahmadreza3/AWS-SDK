const getUrl = require('./getUrl')

module.exports = (configs, awsKeys, callback) => {
  const urls = awsKeys.map(async (awsKey) => {
    const url = await getUrl(configs, awsKey)
    callback && callback(url)
    return url
  })
  return urls
}
