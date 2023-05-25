
const express = require('express');
const router = express.Router();
const SmsProxy = require('../SmsProxy');
const db = require('../models')
router.use(express.urlencoded({ extended: true }))
router.use(express.json())


const smsProxy = new SmsProxy();


router.get('/messages', (req,res) => {

   
    res.render('messages')
})

router.get('/messages/:id', async (req,res) => {
    
let results = await db.owners.findOne({ where: { randomString: id } });
let records = results.json()
res.json(records)


})

// Handle and route incoming SMS to virtual numbers
router.get('/webhooks/inbound-sms', (req, res) => {
    const from = req.query.msisdn;
    const to = req.query.to;
    const text = req.query.text;
    console.log('inside webhooks');
    // Route virtual number to real number
    smsProxy.proxySms("17705466265", "hello");

    res.sendStatus(204);
});

// Start a chat
router.post('/messages', async (req, res) => {
    const userANumber =req.user.phonenum

    let dogID = req.body.dogID
    console.log(dogID," dog id");
    

   console.log(req.user); 
console.log("phone num",req.user.phonenum);

let dog = await db.dogs.findByPk(dogID)

let ownerID = dog.ownerID
let owner = await db.owners.findByPk(ownerID)
const userBNumber = owner.phonenum









    smsProxy.createChat(userANumber, userBNumber, (err, result) => {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json(result);
        }
    });
    res.redirect('/webhooks/inbound-sms')

});



module.exports = router;