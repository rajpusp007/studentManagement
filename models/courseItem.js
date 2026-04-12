const mongoose = require('mongoose');
const courseItemSchema = new mongoose.Schema({
  courseName: {
    type: String,
    enum: ['BSC','Bcom','BBA','BA','BPharma'],
    require: true
  },
  duration: {
    type: String,
    require: true
  },
  fees: {
    type: Number,
    require: true
  },
  language: {
    type: String,
    require: true
  },
  session: {
    type: Number,
    require: true
  }
});

const courseItem = mongoose.model('courseItem', courseItemSchema);
module.exports = courseItem;