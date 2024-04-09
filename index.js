require('dotenv').config()
const fs = require('fs')
const aws = require('./AWS')

const file = fs.readFileSync('./img/3419668782265937.png')


// const upload = async (file)=>{
//   const res = await aws.upload(file)
// }
// upload(file)

// const geturl = async (awsKey)=>{
//   const res = await aws.getUrl(awskey)
// }
// geturl(awsKey)

// const remove = async (awsKey)=>{
//   const res = await aws.remove(awsKey)
// }
// remove(awsKey)