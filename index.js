//导入express（基于Node.js的web应用开发框架，提供API）
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3020);

//静态资源路径
app.use(express.static(__dirname + '/public'));

//路由
app.get('/', function (req, res) {
    res.type('text/html');
    res.send('<span style="color:green">Welcome to My Site</span>');
});

//404页面
app.use(function (req, res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404-Not a found</span>');
});

//500页面
app.use(function (err, req, res) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

//提示信息
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});