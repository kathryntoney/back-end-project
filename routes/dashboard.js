const express = require('express');
const router = express.Router();
const db = require('../models');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })
const auth = require('../auth');
const passport = require('passport');
const bcrypt = require('bcryptjs');


router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/dashboard', auth, async (req, res) => {
    let sessionID = req.session.passport.user
    console.log(sessionID);
    let ownerID = req.user.id
    console.log(ownerID);
    // try {
    //     let records = await db.owners.findAll({ where: { ownerID: sessionID } })
    //     res.render('dashboard', {
    //         owner: records
    //     })
    // } catch (error) {
    //     console.log('error in get', error);
    //     res.render('/ktlogin')
    // }
    res.render('dashboard')
})

// cloudinary.config({
//     cloud_name: 'fetch-a-friend',
//     api_key: '393814593521973',
//     api_secret: 'inE7ab_iEOOeC7Ljiw1aUqieGK8'
// });

router.post('/dashboard', async (req, res) => {
    try {
        console.log('inside try');
        let ownerID = req.user.id
        console.log(ownerID);
        let { dogName, zipcode, breed, age, fixed, description, faveToy, faveGame, energy, size } = req.body;
        // console.log(imageURL);
        let newDog = await db.dogs.create({
            dogName: dogName,
            ownerID: `${ownerID}`,
            zipcode: zipcode,
            breed: breed,
            age: age,
            fixed: fixed,
            description: description,
            faveToy: faveToy,
            faveGame: faveGame,
            energy: energy,
            size: size,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        console.log(newDog.dataValues.id);
        req.session.dogID = newDog.dataValues.id
        res.redirect('/profileupload')
    } catch (error) {
        console.log('error inside submit', error);
    }
})

// router.post('/dashboard1', upload.single("imageURL"), async (req, res) => {
//     try {
//         // multer places this image on the request in an object called file
//         console.log(req.file, req.file.filename);
//         // let name = req.file.filename
//         let picture = req.file.path
//         let upload = await cloudinary.uploader.upload(picture)
//         // console.log(upload.url); 
//         let imageURL = upload.url
//         console.log(imageURL);
//         let update = await db.dogs.update(
//             { imageURL: imageURL },
//             { where: { id: dogs.id } }
//         )
//         res.redirect('/dashboard')
//     } catch (error) {
//         console.log('error in upload');
//     }
// })

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
