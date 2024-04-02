var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var v1 = require('../v1/routes/index');
var v2 = require('../v2/routes/index');

router.use('/v1',v1);
router.use('/v2',v2);

module.exports = router;

