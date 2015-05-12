var AccountInfo = require('../moulds/accountinfo');
var Paginate = require('../Paginate');
exports.set = function(router) {
    router.get('/manageAccount/list', function (req, res, next) {
        db.query('select count(*) total from account_info', function (accounts, fields) {
            console.log(accounts);
			var pagesize = 10;
			var page = req.query.q ? req.query.q : 1;
			var paginate = new Paginate(page, pagesize, accounts[0].total);
			console.log(paginate);
			var startIndex = pagesize*(page - 1);
			db.query('select * from account_info limit '+startIndex+ ' , 10',function(resp, fields){
				res.render('list', { title: '账户列表', accounts: resp, paginate: paginate });
				//console.log(resp);
			});
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