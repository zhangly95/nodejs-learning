var express = require('express');
var router = express.Router();

// /* GET hello page. */
// router.get('/', function(req, res, next) {
//   res.send('The time is'+ new Date().toString());//调用视图模板index，传递titile变量
// });
router.get('/user/:username',function(req,res){
    res.send('user:'+req.params.username);
});

module.exports = router;
