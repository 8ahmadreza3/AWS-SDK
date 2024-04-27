const getUrl = require('./get/getUrl')
const getFile = require('./get/getFile')
const getManyFiles = require('./get/getManyFiles')
const getManyUrl = require('./get/getManyUrl')
const filesList = require('./lists/filesList')
const bucketsList = require('./lists/bucketsList')
const remove = require('./remove/removeFile')
const removeMany = require('./remove/removeMany')
const customUpload = require('./upload/customUpload')
const uploadMany = require('./upload/uploadMany')
const upload = require('./upload/uploadFile')

module.exports = {
  upload,
  getUrl,
  remove,
  filesList,
  bucketsList,
  getFile,
  customUpload,
  getManyFiles,
  uploadMany,
  removeMany,
  getManyUrl
}
