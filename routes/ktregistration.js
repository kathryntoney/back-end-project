const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
const jwt = require('jsonwebtoken');

router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.get('/ktregistration', (req, res) => {
    res.render('ktregistration', {
        error: ""
    })
})

router.post('/ktregistration', async (req, res) => {
    try {
        console.log('inside try');
        let { firstName, lastName, email, password, phonenum } = req.body;
        console.log("katie registration",req.body);
        password = bcrypt.hashSync(password, 8)
        // console.log(password);
        let insertRecord = await db.owners.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phonenum: phonenum,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        // res.json(insertRecord)
        res.redirect('/dogcreation')

    } catch (error) {
        console.log('inside error');
        res.render('ktregistration', {
            error: `error: can't register this username`
        })
    }
})

module.exports = router;
