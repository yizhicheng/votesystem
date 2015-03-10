var AccountInfo = require('../moulds/accountinfo');
exports.set = function(router) {
    router.get('/manageAccount/list', function (req, res, next) {
        db.query('select * from account_info', function (accounts, fields) {
            console.log(accounts);
            res.render('list', { title: '账户列表', accounts: accounts });
        });
    });
    router.get('/manageAccount/add', function (req, res, next) {
        res.render('add', { title: '添加账户'});
    });
    router.all('/manageAccount/doAdd', function (req, res, next) {
        var accountInfo = new AccountInfo();
        accountInfo.setProperties(req);
        // console.log(accountInfo);
        // 组织数据准备入库
        db.insert('account_info', accountInfo.getProperties(), function (resp) {
            var result = {};
            if (resp.affectedRows == 1) {
                result = {error: false, msg: "入库成功", code: 200};
            } else {
                result = {error: true, msg: "入库失败", code: 400};
            }
            res.send(result);
        });
    });
}