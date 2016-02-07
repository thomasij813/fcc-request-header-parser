var express = require('express');
var api = require('../api.js');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/whoami', api.whoami);

module.exports = router;
