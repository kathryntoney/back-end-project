const express = require('express');
const router = express.Router();
const db = require('../models');
// const auth = require('../auth');
// const passport = require('passport');
// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const upload = multer({ dest: __dirname + '/uploads/profilephotos' })

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;