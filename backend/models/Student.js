const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  usn: {
    type: String
  },
  dob: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)