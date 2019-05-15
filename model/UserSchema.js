const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: { type: String }, // 用户id
  email: { type: String }, // 邮箱
  mobile: { type: String }, // 手机号
  password: { type: String }, // 用户登录密码
  alias: { type: String }, // 昵称
  registerTime: { // 注册时间
    type: Date,
    default: () => {
      return new Date()
    },
  },
}, { collection: 'user' })
userSchema.index({ userId: 1 })
userSchema.index({ token: 1 })

module.exports = userSchema
