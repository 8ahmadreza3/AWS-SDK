module.exports.publicUrl = (configs, awsKey) => {
  return configs.bucketURL + awsKey + '.png'
}

module.exports.manyPublicUrl = (configs, awsKeys) => {
  awsKeys = awsKeys.map((awsKey) => {
    return configs.bucketURL + awsKey + '.png'
  })
  return awsKeys
}
