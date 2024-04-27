This package has been developed for easier access to Amazon Web Service's S3 bucket for use in NodeJS. [aws-sdk](https://www.npmjs.com/package/aws-sdk)

To use, you must first create your own bucket and set the value of the ENV file according to the created bucket (the example given in the env.example)
```
ENDPOINT=
BUCKET_NAME=
ACCESS_KEY=
SECRET_KEY=
URL=
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
}
upload(file)
```
- remove file
```js
const remove = async (awsKey)=>{
  const res = await aws.remove(awsKey)
}
remove(awsKey)
```
- get file
```js
const geturl = async (awsKey)=>{
  const res = await aws.getUrl(awsKey)
}
geturl(awsKey)
```
- get file url
```js
const geturl = async (awsKey)=>{
  const res = await aws.getUrl(awsKey)
}
geturl(awsKey)
```
- files list 
```js
const filesList = async () => {
  const files = await aws.filesList()
}
filesList()
```
- buckets list
```js
const bucketsList = async () => {
  const buckets = await aws.bucketsList()
}
bucketsList()
```
- upload with custom awsKey 
```js
const customUpload = async (file, awsKey) => {
  const response = await aws.customUpload(file, awsKey)
}
customUpload(file, awsKey)
```
- get many files
```js
const getManyFiles = async (awsKeys) => {
  const files = await aws.getManyFiles(awsKeys,(file)=> {
    console.log(file); // do something with the file info
  })
}
getManyFiles(awsKeys)
```
- upload many files
```js
const uploadMany = async (files) => {
  const files = await aws.uploadMany(files,(res)=> {
    console.log(res); // do something with the responses
  })
}
uploadMany(files)
```
- remove many files
```js
const removeMany = async (awsKeys) => {
  const res = await aws.removeMany(awsKeys,(res)=> {
    console.log(res); // do something with the responses
  })
}
removeMany(awsKeys)
```
- get many url
```js
const getManyUrl = async (awsKeys) => {
  const urls = await aws.getManyUrl(awsKeys,(url)=> {
      console.log(url); // do something with the url
  })
}
getManyUrl(awsKeys)
```