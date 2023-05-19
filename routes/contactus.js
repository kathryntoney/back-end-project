
const express = require('express');
const router = express.Router();




router.get('/contactus', (req,res) => {

   
    res.render('contact')
})


module.exports = router;