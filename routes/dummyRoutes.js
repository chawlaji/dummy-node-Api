const express = require('express');
const router = express.Router();
const dummyService= require('../services/dummyService')

router.get('/getResponse',dummyService.getSampleData);
module.exports = router;