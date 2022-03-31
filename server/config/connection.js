const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/t-shirt-paradise', {
  useNewUrlParser: true,});



module.exports = mongoose.connection;
