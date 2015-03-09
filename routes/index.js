exports.set = function(router){
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Home' });
    });
    router.get('/home', function(req, res, next) {
        res.render('index', { title: 'Home' });
    });
};



