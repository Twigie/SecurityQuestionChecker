const express = require('express')
const passport = require('passport')
require('../passport')

const router = express.Router()


router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'user_hometown', 'user_posts', 'user_likes']}))

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'http://localhost:8080/error'}),
    (req,res) => {
        req.session.fb = { 'profile':req.user.profile,'token': req.user.token}
        res.cookie('FB', req.user.token, {httpOnly: false})
        res.cookie('FBID', req.user.profile.id, {httpOnly: false})
        res.redirect('http://localhost:8080/')
    }
)
module.exports = router