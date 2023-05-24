const passportLocal = require('passport-local');
const bcrypt = require('bcryptjs');
const db = require('../models');

const init = (passport) => {
    passport.use(new passportLocal({ usernameField: 'email' }, async (email, password, done) => {
        try {
            console.log('checkpoint one');
            let records = await db.owners.findAll({ where: { email } })
            if (records) {
                console.log('checkpoint two inside records');
                let record = records[0]
                bcrypt.compare(password, record.password, (error, match) => {
                    if (match) {
                        console.log('checkpoint 3 passwords did match');
                        return done(null, record)
                    }
                    else {
                        console.log(`checkpoint 4 passwords didn't match`);
                        return done(null, false)
                    }
                })
            }

        } catch (error) {
            console.log('error!');
            return done(error)
        }
    }))
    passport.serializeUser((user, done) => {
        console.log("31", user.randomString);
        console.log('checkpoint 5 inside serialize user');
        done(null, user.randomString)
    })

    passport.deserializeUser(async (id, done) => {
        try {
            console.log("37",id);
            console.log('checkpoint 6 ids did match after deserialization');
            let foundUserInDBfromSessionID = await db.owners.findOne({ where: { randomString: id } });
            // console.log(foundUserInDBfromSessionID);
            if (foundUserInDBfromSessionID) {
                done(null, foundUserInDBfromSessionID)
            }
            else {
                console.log('checkpoint 7 ids did NOT match after deserialization');
                done(null, false)
            }
        } catch (error) {
            console.log('error in deserialization');
            done(error, false)
        }
    })
} // end of fxn

module.exports = init; // need to go require this function in app.js