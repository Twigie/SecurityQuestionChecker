const express = require('express')
const router = express.Router()
const {scanFB} = require('../scanners/facebook')
const {scanTW} = require('../scanners/twitter')

router.get('/facebook', async (req, res) => {
  res.status(200).send(await scanFB(req))
})
router.get('/twitter', async (req, res) => {
  res.status(200).send(await scanTW(req))
})

module.exports = router