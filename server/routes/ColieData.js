const express = require('express')
const router=express.Router();
const Coolie=require("../model/colieData")
const Device=require("../model/device");
router.post('/add', async (req, res) => {
    try {
      const coolie = new Coolie({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        person_image: req.body.person_image,
        badge_id: req.body.badge_id,
        badge_image: req.body.badge_image,
        age: req.body.age,
        gender: req.body.gender,
        phone_number: req.body.phone_number,
        address: req.body.address,
        alternate_number: req.body.alternate_number,
        station_serving: req.body.station_serving,
        bank_account: req.body.bank_account,
        ifsc_code: req.body.ifsc_code,
        coolie_id: req.body.coolie_id
      
      });
  
      await coolie.save();
      res.status(201).json({success: true});
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.post('/device', async (req, res) => {
    try {
      const { lat, long, ip, user_agent, app_name, speed, accuracy } = req.body;
  
      // Create a new DeviceInfo instance
      const deviceInfo = new Device({
        lat,
        long,
        ip,
        user_agent,
        app_name,
        speed,
        accuracy
      });
  
      // Save the deviceInfo to MongoDB
      const savedDeviceInfo = await deviceInfo.save();
  
      // Respond with the saved deviceInfo object
      res.status(201).json(savedDeviceInfo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });



module.exports=router