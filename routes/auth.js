const express = require('express')
const router = express.Router()
const { userModel } = require('../model/index')
const encodeUtil = require('../utils/encodeUtil')
const ResponseData = require('../class/ResponseData.js')
const ResponseTypes = require('../enum/ResponseTypes')
const authentication = require('../middleware/authentication')

router.post('/login', async (req, res, next) => {
  const resData = new ResponseData()
  const { username, password } = req.body
  try {
    const userDoc = await userModel.findOne({ email: username, password })
    if (!userDoc) {
      throw new Error('账户或密码错误！')
    }
    const token = encodeUtil.encodeToken({ payload: { userId: userDoc.userId } })
    resData.setData({ token })
    resData.setStatus(ResponseTypes.OK)
  } catch (err) {
    resData.setMsg(err.message)
    resData.setStatus(ResponseTypes.ERROR)
  } finally {
    res.json(resData)
  }
})

router.post('/logout', authentication, async (req, res, next) => {
  // const userId = req.userId
  const resData = new ResponseData()
  resData.setStatus(ResponseTypes.OK)
  res.json(resData)
})

router.post('/register', async (req, res, next) => {
  const resData = new ResponseData()
  const { email, password } = req.body
  try {
    // 检查邮箱是否合法
    // 用户名是否重复
    const isExist = await userModel.findOne({ email }, { email: 1 })
    if (isExist) {
      throw new Error('此邮箱已被注册！')
    }
    await userModel.create({
      userId: email,
      username: email,
      email,
      password,
    })
    resData.setData({ email })
    resData.setStatus(ResponseTypes.OK)
  } catch (error) {
    resData.setMsg(error.message)
    resData.setStatus(ResponseTypes.ERROR)
  } finally {
    res.json(resData)
  }
})

module.exports = router
