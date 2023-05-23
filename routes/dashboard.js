const express = require('express');
const router = express.Router();
const db = require('../models');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })


router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        error: ""
    })
})

cloudinary.config({
    cloud_name: 'fetch-a-friend',
    api_key: '393814593521973',
    api_secret: 'inE7ab_iEOOeC7Ljiw1aUqieGK8'
});

router.post('/dashboard', async (req, res) => {
    try {
        console.log('inside try');
        let { dogName, zipcode, breed, age, fixed, description, faveToy, faveGame, energy, size, imageURL } = req.body;
        console.log(imageURL);
        let newDog = await db.dogs.create({
            dogName: dogName,
            zipcode: zipcode,
            breed: breed,
            age: age,
            fixed: fixed,
            description: description,
            faveToy: faveToy,
            faveGame: faveGame,
            energy: energy,
            size: size,
            imageURL: imageURL,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.redirect('/dashboard')
    } catch (error) {
        console.log('error inside submit');
    }
})

router.post('/dashboard1', upload.single("imageURL"), async (req, res) => {
    try {
        // multer places this image on the request in an object called file
    console.log(req.file, req.file.filename);
    // let name = req.file.filename
    let picture = req.file.path
    let upload = await cloudinary.uploader.upload(picture)
    console.log(upload.url); 
    let imageURL = upload.url
    
    res.redirect('/dashboard')
    } catch (error) {
        console.log('error in upload');
    }
   
})

// const uploadImg = async (img) => {
//     try {
//         let picture = await cloudinary.uploader.upload(img, { resource_type: "auto" })
//         console.log(picture);
//         let imageURL = await cloudinary.url(img)
//         console.log(imageURL);
//     } catch (error) {
//         console.log('image upload error');
//     }
// }

module.exports = router;
