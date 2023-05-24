const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./auth/passport-config')(passport);
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/profilephotos' })
const port = 3000;

app.use(express.static('public'));
app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
        "img-src": ["'self'", "data:", "res.cloudinary.com"]
    }
}));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieSession({
    name: 'session',
    keys: ['secretpassword'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use(passport.initialize());
app.use(passport.session())

//routes 


app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))
app.use(require('./routes/home.js'))
app.use(require('./routes/dashboard.js')) // manage your profile / settings
app.use(require('./routes/profileupload.js')) // upload profile picture
app.use(require('./routes/ktlogin.js')) // upload profile picture
app.use(require('./routes/ktregistration.js')) // upload profile picture
app.use(require('./routes/match.js')) // manage your profile / settings
app.use(require('./routes/ktmatch.js')) // manage your profile / settings

// app.use(require('./routes/aboutus.js'))
// app.use(require('./routes/contactus.js'))


app.use(require('./routes/messages.js')) // DM with another dog
//  app.use(require('./routes/profile.js')) // view another dog's profile
// app.use(require('./routes/search.js')) // view another dog's profile


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})