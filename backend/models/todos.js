const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  duration: Number
});


module.exports = mongoose.model('todos', todoSchema);
