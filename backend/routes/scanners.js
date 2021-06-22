const express = require('express')
const router = express.Router()
const {scanFB} = require('../scanners/facebook')
const {scanTW} = require('../scanners/twitter')

router.get('/facebook', async (req, res) => {
  if (req.session.fb.fbID && req.session.fb.fbToken) {
    res.status(200).send(await scanFB(req.session.fb))
  } else res.status(400).send('You are not logged into Facebook')
})
router.get('/twitter', async (req, res) => {
  if (req.session.tw.twID) {
    res.status(200).send(await scanTW(req.session.tw))
  } else res.status(400).send('You are not logged into Twitter')
})

module.exports = router