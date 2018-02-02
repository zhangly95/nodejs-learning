var express = require('express');
var router = express.Router();

var users={
  'Carbo':{
    name:'Carbo',
    website:'http://www.byvoid.com'
  }
};

router.all('/:username',function(req,res,next){
   //检查用户是否存在
   if (users[req.params.username]){
     next()
   } else {
     next(new Error(req.params.username +' does not exist'));
   }
  });
router.get('/:username',function(req,res){
  //用户一定存在，直接展示
    res.send(JSON.stringify(users[req.params.username]));
  });
router.put('/user/:username',function(req,res){
  //修改用户信息
  res.send('Done')
});

  module.exports = router;
  