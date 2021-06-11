const axios = require('axios')
const express = require('express')
const router = express.Router()
const {scan} = require('../scanners/facebook')

router.get('/facebook', async (req, res) => {
  res.status(200).send(await scan(req))
})


module.exports = router