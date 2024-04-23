const upload = require('./upload/uploadFile')
const getUrl = require('./get/getUrlFile')
const remove = require('./remove/removeFile')
const filesList = require('./lists/filesList')
const bucketsList = require('./bucketsList')
const getFile = require('./get/getFile')
const customUpload = require('./upload/customUpload')

module.exports = {
  upload,
  getUrl,
  remove,
  filesList,
  bucketsList,
  getFile,
  customUpload
}
