const upload = require('./uploadFile')
const getUrl = require('./getUrlFile')
const remove = require('./removeFile')
const filesList = require('./filesList')
const bucketsList = require('./bucketsList')
const getFile = require('./getFile')
const customUpload = require('./customUpload')

module.exports = {
  upload,
  getUrl,
  remove,
  filesList,
  bucketsList,
  getFile,
  customUpload
}
