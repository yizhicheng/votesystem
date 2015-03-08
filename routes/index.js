exports.set = function(router){
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: '密码管理系统' });
    });
};



