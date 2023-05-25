const express = require('express');
const router = express.Router();
const db = require('../models');
router.use(express.urlencoded({ extended: false }))
router.use(express.json())


router.get('/SeeMessage/:id', async(req,res)=>{
   
    
        let dogID = await db.dogs.findAll({where:{ownerID:ownerID}})
        let messages = await db.messages.findAll({where:{dogID:dogID}})
        res.render('seeMessages',{msgList:messages})
    })
    module.exports = router;