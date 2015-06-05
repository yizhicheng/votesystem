exports.set = function(router) {
    router.get('/yellowPages/list', function (req, res, next) {
        
        
        res.render('yellowPageslist', { title: '黄页列表' });
    });
}