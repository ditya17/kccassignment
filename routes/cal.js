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
    res.render('cal',{z} );
    
  });




module.exports = router;