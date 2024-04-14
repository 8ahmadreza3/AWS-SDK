const upload = require('./uploadFile')
const getUrl = require('./getUrlFile')
const remove = require('./removeFile')
const filesList = require('./filesList')
const bucketsList = require('./bucketsList')

module.exports = {
  upload,
  getUrl,
  remove,
  filesList,
  bucketsList
}
