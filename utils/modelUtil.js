const db = require('../model/db')
const mongoose = require('mongoose')

exports.updateSecret = async function (userId) {
  const uuid = mongoose.Types.ObjectId().toHexString()
  await db.userModel.findOneAndUpdate({ userId }, { secret: uuid })
  return uuid
}
