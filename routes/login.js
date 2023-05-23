const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/login', (req,res) => {


    res.render('login')
})


router.post('/login', passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/login'
}))

router.get('/logout', (req, res) => { 

    req.logout()  // from passport, kill the session 

    res.redirect('/')
 })


module.exports = router;