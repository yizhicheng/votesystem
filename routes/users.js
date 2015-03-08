exports.set = function(router){
    /* GET home page. */
    router.get('/user', function(req, res, next) {
        res.render('index', { title: 'user' });
    });
};