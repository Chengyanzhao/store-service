const mongoose = require('mongoose')
const mongodbConnection = require('../config/index').mongodbConnection

const db = mongoose.createConnection(mongodbConnection, { useNewUrlParser: true })

db.on('error', (error) => {
  console.log(`mongodb connection fails: ${error.message}`)
})
db.once('open', (callback) => {
  console.log('mongodb connection successful.')
})

const userModel = db.model('user', require('./UserSchema'))

module.exports = { userModel }
