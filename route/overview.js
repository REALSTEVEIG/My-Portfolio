const express = require('express')

const router = express.Router()

const submitMessage = require('../controller/submit')

router.route('/').post(submitMessage)

module.exports = router