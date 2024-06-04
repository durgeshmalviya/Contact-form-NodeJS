const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact:String,
    query:String,
  });

module.exports = mongoose.model('query', profileSchema);