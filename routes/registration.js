
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //hash and salt our password

const db = require('../models');  //models/index.js

import('crypto-random-string').then((module) => {
    const cryptoRandomString = module.default;
  


 router.use(express.urlencoded({extended: false}))
 router.use(express.json())
//req.body
// collect username, password from reg. form 
// encrypt password 
// insert record into db 
// redirecit our user to login

router.get('/registration',async  (req,res) => {


    res.render('registration', {
        error: ""
    })
})




router.post('/registration', async (req, res) => { 
    //collect data from form and store it in our db 

 

        //scrape info from header 

        let {firstName,lastName, email, password} = req.body; 
        console.log(firstName,lastName, email, password)
         randomString = cryptoRandomString({ length: 8 });
        console.log("42",randomString);
        password = bcrypt.hashSync(password, 8) //a salted hash
        console.log("password", password);
        
        // create a new record in our db 
        try{
        let insertRecord = await db.owners.create({

            firstName, 
            lastName, 
            email, 
           password,
           createdAt: new Date(),
            updatedAt: new Date(),
           randomString: randomString // Add the generated random string to the record
        })
        console.log(insertRecord);
           res.redirect('/login')
   
        

    }
    catch(err){

        res.render('registration', {
            error: "error: can't register this username"
        })
    }

 })
})

module.exports = router;