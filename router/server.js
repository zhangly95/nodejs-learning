var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/sample',function(req,res){
    res.send('this is a sample!');
});

//Express Router
var router = express.Router();

//在一个请求被处理之前都会执行的middleware
//注意middleware要放在routes之前，否则不会执行
router.use(function(req,res,next){
    //输出记录信息到终端
    console.log(req.method,req.url);
    //继续路由处理
    next();
})

//首页路由（http://localhost:8080)
router.get('/',function(req,res){
    res.send('home page!');
});
//另一个网页路由（http://localhost:8080、about)
router.get('/about',function(req,res){
    res.send('about page!');
});

//验证：name的route middleware
router.param('name',function(req,res,next,name){
    //验证

    //显示验证讯息
    console.log('doing name validation on' + name);
    //当验证成功时，将其储存至req
    req.name = name;
    //继续后续的处理流程
    next();
});



//含有参数的路由
router.get('/hello/:name',function(req,res){
    res.send('hello' + req.params.name + '!');
});

//将路由套入应用程式
app.use('/app',router)
//使用app.route直接在应用程式上新增路由
app.route('/login')
//显示登入表单（GET http://localhost:8080/login)
.get(function(req,res){
    res.send('this is the login form');
})

//处理登入表单（POST http：//localhost:8080/login)
.post(function(req,res){
    console.log('processing');
    res.send('process the login form!')
});



app.listen(port);