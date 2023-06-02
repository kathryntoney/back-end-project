const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');
const passport = require('passport');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

router.get('/dashboard', auth, async (req, res) => {
    // let ownerID = req.session.passport.user;
    // console.log(ownerID);
    try {
        console.log('inside try');
        let records = await db.dogs.findAll({
            where: { ownerID: req.session.passport.user }, include:[{
                model: db.messages,
                required: false
            }]
        })
        console.log(records[0].messages);
        res.render('dashboard', {
            allDogs: records
        })
    } catch (error) {
        console.log('error in dog filter: ', error);
        res.render('dashboard')
    }
})

module.exports = router;
