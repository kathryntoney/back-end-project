const express = require('express');
const router = express.Router();
const db = require('../models');
router.use(express.urlencoded({ extended: false }))
router.use(express.json())


router.get('/SendComment', async (req, res) => {
    try {
        let records = await db.dogs.findAll()



        res.render('SendComment', { dogs: records })
    }
    catch {
        res.render('SendComment', { dogs: "" })
    }

})


router.post('/SendComment', async (req, res) => {
    let { dog, message } = req.body

    let insertRecord = await db.messages.create({
        dogID: dog,
        message: message

    })
    res.redirect('/dashboard')
})


module.exports = router;