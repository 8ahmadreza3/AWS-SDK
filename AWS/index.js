const upload = require('./upload/uploadFile')
const getUrl = require('./get/getUrl')
const remove = require('./remove/removeFile')
const filesList = require('./lists/filesList')
const bucketsList = require('./lists/bucketsList')
const getFile = require('./get/getFile')
const customUpload = require('./upload/customUpload')
const getManyFiles = require('./get/getManyFiles')
const getManyUrl = require('./get/getManyUrl')

module.exports = {
  upload,
  getUrl,
  remove,
  filesList,
  bucketsList,
  getFile,
  customUpload,
  getManyFiles
}
