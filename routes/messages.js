const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {


    res.render('messages')
})

router.post('/messages', async (req,res) => {

    
    
})


module.exports = router;