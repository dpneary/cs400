const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('PS3', {string: 'Welcome! Hello World!'});
});

router.post('/',function(req,res,next){
    res.render('PS3', {postedString:req.body.word, stringLength:req.body.word.length});
});

module.exports = router;
