const qs = require('qs')

exports.getParamsFromUrl = function (url) {
  const obj = qs.parse(url)
  return obj
}
exports.getParamValueFromUrl = function (url, key) {
  const params = exports.getParamsFromUrl(url)
  return params[key]
}