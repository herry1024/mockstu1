var express = require('express');
var router = express.Router();
var app = express();
var users = {
    'byvoid': {
        name: 'Carbon',
        website: 'http://www.byvoid.com'
    }
};

/* GET home page. */
router.get('/', function (req, res, next) {
    //调用模版引擎
    res.render('index', {title: 'Express'});
});

router.all('/user/:username', function (req, res, next) {
// 检查用户是否存在
    if (users[req.params.username]) {
        console.log(req.params.username);
        next();
    } else {
        next(new Error(req.params.username + ' does not exist.'));
    }
});

router.get('/user/:username', function (req, res, next) {
    res.send('user：' + req.params.username);
});
router.get('/hello', function (req, res, next) {
    res.send('The time is ' + new Date().toString());
});

module.exports = router;
