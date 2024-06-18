// models/DeviceInfo.js

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const deviceInfoSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  ip: { type: String, maxlength: 20 },
  user_agent: { type: String, maxlength: 20 },
  app_name: { type: String, maxlength: 20 },
  session_id: { type: String, default: uuidv4 },
  date: { type: Date, default: Date.now },
  time: { type: String, default: () => new Date().toISOString().split('T')[1].split('.')[0] },
  speed: { type: Number },
  accuracy: { type: Number }
});

const Device = mongoose.model('DeviceInfo', deviceInfoSchema);

module.exports = Device;
