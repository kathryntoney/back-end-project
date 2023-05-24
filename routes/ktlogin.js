const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/ktlogin', (req, res) => {
    res.render('ktlogin')
})

router.post('/ktlogin',
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/ktlogin'
    }))

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/ktlogin')
})

module.exports = router;