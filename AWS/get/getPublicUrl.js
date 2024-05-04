module.exports.publicUrl = (awsKey) => {
  return process.env.BUCKET_URL + awsKey + '.png'
}

module.exports.manyPublicUrl = (awsKeys) => {
  awsKeys = awsKeys.map((awsKey) => {
    return process.env.BUCKET_URL + awsKey + '.png'
  })
  return awsKeys
}
