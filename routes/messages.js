
const express = require('express');
const router = express.Router();




router.get('/messages', (req,res) => {

   
    res.render('messages')
})


module.exports = router;