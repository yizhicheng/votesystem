var util = require('util');
var Base = require('./base');
var AccountInfo = function(){
    this.obj = {
        id: undefined,
        account_name: undefined,
        account_id: undefined,
        account_password: undefined,
        account_description: undefined
    };
};
util.inherits(AccountInfo, Base);
module.exports = AccountInfo;