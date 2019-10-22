const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  name: String,
  destination: String,
  start: Date,
  end: Date,
  activities: String,
})

module.exports = mongoose.model('Trip', tripSchema)