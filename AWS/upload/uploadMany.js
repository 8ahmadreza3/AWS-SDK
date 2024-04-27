const uploadFile = require('./uploadFile')

module.exports = (fileContents, callback) => {
  const responses = fileContents.map(async (fileContent) => {
    const response = await uploadFile(fileContent)
    callback && callback(response)
    return response
  })
  return responses
}
