const uploadFile = require('./uploadFile')

module.exports = (configs, fileContents, callback) => {
  const responses = fileContents.map(async (fileContent) => {
    const response = await uploadFile(configs, fileContent)
    callback && callback(response)
    return response
  })
  return responses
}
