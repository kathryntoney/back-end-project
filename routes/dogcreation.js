const express = require('express');
const router = express.Router();
const db = require('../models');
require('dotenv').config();
const auth = require('../auth');
const passport = require('passport');
const bcrypt = require('bcryptjs');

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/dogcreation', (req, res) => {
    res.render('dogcreation', {
        error: ""
    })
})

router.post('/dogcreation', auth, async (req, res) => {
    console.log('inside dashboard line 19: ', req.session.passport.user);
    // console.log('line 20: ', req.user.id);
    let ownerID = req.session.passport.user;
    console.log('checking owner id line 22: ', ownerID);
    try {
        console.log('inside try');
        let { dogName, zipcode, breed, age, fixed, description, faveToy, faveGame, energy, size, imageURL } = req.body;
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
            imageURL: imageURL,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        req.session.dogID = newDog.dataValues.id
        console.log(req.session.dogID);
        res.redirect('/profileupload')
    } catch (error) {
        console.log('error inside submit');
    }
})

module.exports = router;
