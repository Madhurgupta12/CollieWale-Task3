const mongoose = require('mongoose')
const express = require('express')
const Data=new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 20 },
  last_name: { type: String, required: true, maxlength: 20 },
  person_image: { type: String, maxlength: 50 },
  badge_id: { type: String, required: true, unique: true, maxlength: 20 },
  badge_image: { type: String, maxlength: 50 },
  age: { type: Number, min: 0 },
  gender: { type: String, maxlength: 5, enum: ['M', 'F', 'O'] },
  phone_number: { type: String, required: true, maxlength: 20 },
  address: { type: String, maxlength: 50 },
  alternate_number: { type: String, maxlength: 20 },
  station_serving: { type: String, maxlength: 20 },
  bank_account: { type: String, maxlength: 20 },
  ifsc_code: { type: String, maxlength: 20 },
  coolie_id: { type: String, required: true, unique: true, maxlength: 20 }

})
const Coolie = mongoose.model('Coolie', Data);
module.exports = Coolie;