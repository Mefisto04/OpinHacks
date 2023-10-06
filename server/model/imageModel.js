const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [{
    data: Buffer,
    contentType: String,
  }],
});

module.exports = mongoose.model('Image', imageSchema);
