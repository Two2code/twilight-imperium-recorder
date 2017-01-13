var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index');
});

router.post('/', function(req, res){
    console.log(req.params.playerName);
    console.log(req.params.password);
});

module.exports = router;
