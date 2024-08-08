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
const { publicUrl, manyPublicUrl } = require('./get/getPublicUrl')
const { S3Client } = require('@aws-sdk/client-s3')

class aws {
  configs = {
    endpoint: '',
    bucketName: '',
    accessKey: '',
    secretKey: '',
    bucketURL: '',
    client: ''
  };
  constructor(configs) {
    this.configs.endpoint = configs.endpoint
    this.configs.bucketName = configs.bucketName
    this.configs.accessKey = configs.accessKey
    this.configs.secretKey = configs.secretKey
    this.configs.bucketURL = configs.bucketURL
    this.configs.client = new S3Client({
      region: 'default',
      endpoint: configs.endpoint,
      credentials: {
        accessKeyId: configs.accessKey,
        secretAccessKey: configs.secretKey
      }
    })
  }
  upload= async (fileContent, callback)=> {
    const response = await upload(this.configs, fileContent, callback)
    return response.awsKey
  };
  getUrl= (awsKey, callback)=>{
    getUrl(this.configs, awsKey, callback)
  };
  remove= (awsKey, callback)=>{
    remove(this.configs, awsKey, callback)
  };
  filesList= (callback)=>{
    filesList(this.configs, callback)
  };
  bucketsList= (callback)=>{
    bucketsList(this.configs, callback)
  };
  getFile= (awsKey, callback)=>{
    getFile(this.configs, awsKey, callback)
  };
  customUpload= (fileContent, awsKey, callback)=>{
    customUpload(this.configs, fileContent, awsKey, callback)
  };
  getManyFiles= (awsKeys, callback)=>{
    getManyFiles(this.configs, awsKeys, callback)
  };
  uploadMany= (fileContents, callback)=>{
    uploadMany(this.configs, fileContents, callback)
  };
  removeMany= (awsKeys, callback)=>{
    removeMany(this.configs, awsKeys, callback)
  };
  getManyUrl= (awsKeys, callback)=>{
    getManyUrl(this.configs, awsKeys, callback)
  };
  publicUrl= (awsKey)=>{
    publicUrl(this.configs, awsKey)
  };
  manyPublicUrl= (awsKeys)=>{
    manyPublicUrl(this.configs, awsKeys)
  };
}

module.exports = aws
