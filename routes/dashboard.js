const express = require('express');
const router = express.Router();
const db = require('../models');

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        error: ""
    })
})

router.post('/dashboard', async (req, res) => {
    try {
        console.log('inside try');
        let { dogName, zipcode, breed, age, fixed, description, faveToy, faveGame, faveTreat, energy, size, imageURL } = req.body;
        let newDog = await db.dogs.create({
            dogName: dogName,
            zipcode: zipcode,
            breed: breed,
            age: age,
            fixed: fixed,
            description: description,
            faveToy: faveToy,
            faveGame: faveGame,
            faveTreat: faveTreat,
            energy: energy,
            size: size,
            imageURL: imageURL,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.redirect('/index')
    } catch (error) {
        console.log('inside error');
        res.render('/dashboard', {
            error: `registration didn't work, try again`
        })
    }
})

module.exports = router;
