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
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

router.get('/match', auth, async (req, res) => {
    try {
        let records = await db.dogs.findAll()
        res.render('match', {
            allDogs: records,
            pageTitle: "Fetch a Friend"
        })
    } catch (error) {
        res.render('match')
        console.log('error in allDogs get: ', error);
    }

})

module.exports = router;