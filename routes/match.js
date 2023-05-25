const express = require('express');
const router = express.Router();
const db = require('../models');  //models/index.js

router.get('/match', async (req, res) => {
    try {
      const { zipcode } = req.query;
           
    

      // Retrieve the profiles based on the zip code from your database

      const profiles = await db.dogs.findAll({ where: { zipcode } });; // Replace with your own logic
  
      // Render the profiles.ejs template with the profiles data
      res.render('match', { zipcode, profiles });
    } catch (error) {
      console.error('Error occurred during search:', error);
      res.status(500).send('Internal Server Error');
    }
  });




module.exports = router;