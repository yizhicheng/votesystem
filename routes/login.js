var User = require('../moulds/user');
exports.set = function(router) {
    router.get('/login', function (req, res, next) {
        res.render('login', { title: '用户登陆'});
    });
    router.all('/doLogin', function (req, res, next) {
        db.query("select password from user where nick_name='" + req.body.username + "'", function (result, fields) {
            console.log(result[0].password);
            if (req.body.password === result[0].password) {
                req.session.userinfo = {
                    username: req.body.username
                };
                res.send({error: false, msg: "登录成功", code: 200});
            } else {
                res.send({error: true, msg: "登录失败", code: 400});
            }
        });
    });
    router.get('/register', function (req, res, next) {
        res.render('register', { title: '注册'});
    });
    router.all('/doRegister', function (req, res, next) {
        req.body.sys_id = 100000;
        var user = new User();
        user.setProperties(req);
        //user.sys_id = 100000;
        //user.nick_name = req.body.username;
        //user.password = req.body.password;
        
        //组织数据准备入库
        db.insert('user', user.getProperties(), function (resp) {
            var result = {};
            if (resp.affectedRows == 1) {
                result = {error: false, msg: "注册成功", code: 200};
            } else {
                result = {error: true, msg: "注册失败", code: 400};
            }
            res.send(result);
        });
    });
    router.get('/logout', function (req, res, next) {
        req.session.userinfo = null;
        res.locals.userinfo = null;
        res.redirect('/');
    });
};