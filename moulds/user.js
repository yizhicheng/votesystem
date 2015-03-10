var util = require('util');
var Base = require('./base');
var User = function(){
    this.obj = {
        id: undefined,//自增长字段
        sys_id: undefined,
        nick_name: undefined,
        password: undefined
    };
};
util.inherits(User, Base);
module.exports = User;