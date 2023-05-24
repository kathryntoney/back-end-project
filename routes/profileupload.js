const express = require('express');
const router = express.Router();
const db = require('../models');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })


router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/profileupload', (req, res) => {
    res.render('profileupload', {
        error: ""
    })
})

cloudinary.config({
    cloud_name: 'fetch-a-friend',
    api_key: '393814593521973',
    api_secret: 'inE7ab_iEOOeC7Ljiw1aUqieGK8'
});

router.post('/profileupload', upload.single("imageURL"), async (req, res) => {
    console.log('dog id from upload route:', req.session.dogID);
    console.log('line 27:', req.file);
    // let name = req.file.filename
    let picture = req.file.path
    let upload = await cloudinary.uploader.upload(picture)
    console.log(upload.url);
    let imageURL = upload.url
    console.log(imageURL);
    let update = await db.dogs.update(
        { imageURL: imageURL },
        { where: { id: req.session.dogID } }
    )
    res.redirect('/profileupload')
})

module.exports = router;
