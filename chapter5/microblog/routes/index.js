var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//调用视图模板index，传递titile变量
});

module.exports = router;
