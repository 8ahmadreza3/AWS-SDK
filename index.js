require('dotenv').config()
const fs = require('fs')
const aws = require('./AWS')

// const file = fs.readFileSync('./img/3419668782265937.png')

// const upload = async (file)=>{
//   const {response, awsKey} = await aws.upload(file)
//   console.log(process.env.URL + awsKey + '.png')
// }
// upload(file)

// const geturl = async (awsKey)=>{
//   const res = await aws.getUrl(awsKey)
//   console.log(res);
// }
// geturl('8eae2e4f-56a7-44da-bbe3-ca76540e135d')

// const remove = async (awsKey)=>{
//   const res = await aws.remove(awsKey)
// }
// remove(awsKey)

// const filesList = async () => {
//   const files = await aws.filesList()
//   console.log(files)
// }
// filesList()

// const bucketsList = async () => {
//   const buckets = await aws.bucketsList()
//   console.log(buckets);
// }
// bucketsList()
