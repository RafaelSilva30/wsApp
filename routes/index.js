var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    User.insertNew(req.body)
        .then(data => res.jsonp(data))
        .catch(error => {
                console.log(`caught the error: ${error}`);
            return res.status(500).json(error);
        })
});
module.exports = router;
