var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// var messages = {title: 'express'};
//
// router.get('/', function(req, res, next){
//     res.render('index', messages);
// });

module.exports = router;
