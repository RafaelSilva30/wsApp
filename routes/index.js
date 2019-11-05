var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/products', function(req, res, next) {
    console.log(req.body)
	res.jsonp(req.body)
});
module.exports = router;
