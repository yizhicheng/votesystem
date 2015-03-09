exports.set = function(router) {
    router.get('/login', function (req, res, next) {
        res.render('login', { title: '用户登陆'});
    });
    router.all('/doLogin', function (req, res, next) {
        db.query("select password from user where nick_name='" + req.body.username + "'", function (result, fields) {
            console.log(result);
            if (req.body.password === result[0].password) {
                req.session.userinfo = {
                    username: req.body.username
                };
                res.send({error: false, msg: "登录成功", code: 200});
            } else {
                res.send({error: false, msg: "登录成功", code: 200});
            }
        });
    });
    router.get('/register', function (req, res, next) {
        res.render('register', { title: '注册'});
    });
    router.all('/doRegister', function (req, res, next) {
        var data = [req.body.username, req.body.password, 100000];
        //组织数据准备入库
        db.insert('user', ['sys_id', 'nick_name', 'password'], data, function (resp) {
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