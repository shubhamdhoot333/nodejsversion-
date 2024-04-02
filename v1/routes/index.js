var express = require('express');
var { welcome } = require('../controller/user-controller');
const router = express.Router();
router.get('/',welcome);
module.exports = router;

