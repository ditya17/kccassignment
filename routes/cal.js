var express = require('express');
var router = express.Router();

/* GET home page. */

router.all('/', function(req, res, next) {
    res.render('cal');
  });

  router.all('/data', function(req, res) {
    // console.log(req.body.num1);
    // res.json({Name:req.body});
    var x= parseInt(req.body.num1);
    var y= parseInt(req.body.num2);
    var z=x+y;
    res.render('cal',{z});
    
  });

  router.all('/dataa', function(req, res) {
    // console.log(req.body.num1);
    // res.json({Name:req.body});
    var x= parseInt(req.body.num1);
    var y= parseInt(req.body.num2);
    var m=x*y;
    res.render('cal',{m});
    
  });

  router.post('/dataaa', function(req, res) {
    // console.log(req.body.num1);
    // res.json({Name:req.body});
    var c= parseInt(req.body.num1);
    var d= parseInt(req.body.num2);
    var n=c-d;
    res.render('cal',{n});
    
  });



module.exports = router;