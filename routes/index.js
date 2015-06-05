exports.set = function(router){
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Home' });
    });
    router.get('/home', function(req, res, next) {
        res.render('index', { title: 'Home' });
    });
    router.get('/contact', function(req, res, next) {
        // test微信

        res.render('/contact', { title: '联系我们' });
    });
};



