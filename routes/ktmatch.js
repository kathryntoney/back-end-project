const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');
const passport = require('passport');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })

cloudinary.config({
    cloud_name: 'fetch-a-friend',
    api_key: '393814593521973',
    api_secret: 'inE7ab_iEOOeC7Ljiw1aUqieGK8'
});

router.get('/ktmatch', auth, async (req, res) => {
    try {
        let records = await db.dogs.findAll()
        // console.log('line 20 clg records: ', records);
        res.render('ktmatch', {
            allDogs: records,
            pageTitle: "Fetch a Friend"
        })
    } catch (error) {
        res.render('ktmatch')
        console.log('error in allDogs get: ', error);
    }
})

router.get('/ktmatch1', async (req, res) => {
    try {
        const { zipcode } = req.query;
        console.log(req.query);
        // Retrieve the profiles based on the zip code from your database
        allDogs = await db.dogs.findAll({ where: { zipcode } });; // Replace with your own logic
        // Render the profiles.ejs template with the profiles data
        res.render('ktmatch', { zipcode, profiles });
    } catch (error) {
        console.error('Error occurred during search:', error);
        res.status(500).send('Internal Server Error');
    }
})


router.post('/ktmatch', async (req, res) => {
    try {
        const { zipcode } = req.body;
        console.log(zipcode);
        // Retrieve the profiles based on the zip code from your database
       let allDogs = await db.dogs.findAll({ where: { zipcode } }); // Replace with your own logic
        console.log("allDogs",allDogs);
    //    res.send(allDogs)
        res.render('ktmatch', {allDogs:allDogs  });
    } catch (error) {
        console.error('Error occurred during search:', error);
        res.status(500).send('Internal Server Error');
    }
})
module.exports = router;