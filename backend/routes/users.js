const express = require('express')
const passport = require('passport')
require('../passport')

const router = express.Router()

router.get('/auth', async (req, res) => {
    console.log(req.session)
    if (!req.session.fb && !req.session.tw) {
        res.status('201').send('Not Authenticated')
    } else {
        res.status('200').send({...req.session.fb,...req.session.tw})
    }
})


router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'user_hometown', 'user_posts', 'user_likes']}))

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'http://localhost:8080/error'}),
    (req,res) => {
        console.log('fb Success');
        req.session.fb = {"fbToken": req.user.token, "fbID": req.user.profile.id}
        req.session.save((err) => {console.log(err)})
        res.redirect('http://localhost:8080/')
    }
)

router.get('/auth/twitter', passport.authenticate('twitter'))

router.get('/auth/twitter/callback',
    passport.authenticate('twitter', {failureRedirect: 'http://localhost:8080/error'}),
    (req, res) => {
        console.log('tw Success');
        req.session.tw = {"twID": req.user.id, "twPic": req.user.profilePic}
        req.session.save((err) => {console.log(err)})
        res.redirect('http://localhost:8080/')
    }
)



module.exports = router