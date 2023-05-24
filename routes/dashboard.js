const express = require('express');
const router = express.Router();
const db = require('../models');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        error: ""
    })
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

router.post('/dashboard', async (req, res) => {
    try {
        console.log('inside try');
        let { dogName, zipcode, breed, age, fixed, description, faveToy, faveGame, energy, size, imageURL } = req.body;
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
