const getUrl = require('./getUrl')

module.exports = (awsKeys, callback) => {
  const urls = awsKeys.map(async (awsKey) => {
    const url = await getUrl(awsKey)
    callback && callback(url)
    return url
  })
  return urls
}
