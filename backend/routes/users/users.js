const express = require('express')
const passport = require('passport')
require('../../passport')

const router = express.Router()


router.get('/auth/facebook', passport.authenticate('facebook'))

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/error'}),
    (req,res) => {
        res.redirect('http://localhost:3000/')
    }
)
module.exports = router