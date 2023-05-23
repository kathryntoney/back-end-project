const express = require('express');
const router = express.Router();




router.get('/match', (req,res) => {

   
    res.render('match')
})


module.exports = router;