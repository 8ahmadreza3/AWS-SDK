This package has been developed for easier access to Amazon Web Service's S3 bucket for use in NodeJS. [aws-sdk](https://www.npmjs.com/package/aws-sdk)

To use, you must first create your own bucket and set the value of the ENV file according to the created bucket (the example given in the env.example)
```
ENDPOINT=
BUCKET_NAME=
ACCESS_KEY=
SECRET_KEY=
BUCKET_URL=
```
Installing packages with
```console
$ npm install
```

According to the requirement, you request the necessary module and call it in the form used.
```js
const aws = require('./AWS')
```

- upload file
```js
const upload = async (file)=>{
  const {response, awsKey} = await aws.upload(file)
  // or await aws.upload(file, callback)
}
```
- remove file
```js
const remove = async (awsKey)=>{
  const res = await aws.remove(awsKey)
  // or await aws.remove(awsKey, callback)
}
```
- get file
```js
const geturl = async (awsKey)=>{
  const res = await aws.getFile(awsKey)
  // or await aws.getFile(awsKey, callback)
}
```
- get file url
```js
const geturl = async (awsKey)=>{
  const res = await aws.getUrl(awsKey)
  // or await aws.getUrl(awsKey, callback)
}
```
- files list 
```js
const filesList = async () => {
  const files = await aws.filesList()
  // or await aws.filesList(callback)
}
```
- buckets list
```js
const bucketsList = async () => {
  const buckets = await aws.bucketsList()
  // or await aws.bucketsList(callback)
}
```
- upload with custom awsKey 
```js
const customUpload = async (file, awsKey) => {
  const response = await aws.customUpload(file, awsKey)
  // or await aws.customUpload(file, awsKey, callback)
}
```
- get many files
```js
const getManyFiles = async (awsKeys) => {
  await aws.getManyFiles(awsKeys, callback)
}
```
- upload many files
```js
const uploadMany = async (files) => {
  await aws.uploadMany(files, callback)
}
```
- remove many files
```js
const removeMany = async (awsKeys) => {
  await aws.removeMany(awsKeys, callback)
}
```
- get many url
```js
const getManyUrl = async (awsKeys) => {
  await aws.getManyUrl(awsKeys, callback)
}
```
- get public url
```js
const getPublicUrl = async (awsKeys) => {
  const url = await aws.publicUrl(awsKeys)
}
```
- get many public urls
```js
const getManyPublicUrl = async (awsKeys) => {
  const urls = await aws.manyPublicUrl(awsKeys)
}
```