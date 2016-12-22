var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
    res.render('index',
      {
          title:'Express',
          description:'A simple recorder for T-E'
      });
});

module.exports = router;
