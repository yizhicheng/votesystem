/**
 * DataBase class
 * @param type [数据库类型 暂时支持mysql]
 * @constructor
 */
var DataBase = function(type){
    this.dbType = type; //数据库类型
};
DataBase.prototype = {
    createConnect: function(){
        var dbc = require(this.dbType);
        //创建连接
        var client = dbc.createConnection({
            host: 'localhost',
            database: 'sec-ms',
            user: 'root',
            password: 'root',
            port: 3306
        });
        return client;
    },
    query: function(sql, callback){
        var client = this.createConnect();
        client.query(sql, function(err, rows, fields) {
            console.log(sql);
            if (err) throw err;
            //console.log(rows);
            callback(rows, fields);
        });
        client.end();
    },
    /**
     * 私有方法 格式化 value值 bool，number类型value不操作，stirng型为其添加"" 
     * 如value='yizhicheng'；
     * return value='"yizhicheng"';
     */
    _form_sql_data: function(argument){
        var keys = [];
        var values = [];
        for(var key in argument){
            //console.log(arguments[1][key]);
            var value = argument[key];
            if (typeof value == 'function') continue;
            if(value!=undefined){
                keys.push(key);
                if(typeof value == 'string'){
                    value = '"'+value+'"';
                }
                values.push(value);
            }
        };
        return {
            keys: keys,
            values: values
        };
    },
    /**
     * arguments [1.table name 2.obj[表模型] , 3.callback 回调函数]
     */
    insert: function() {
        var sql = "INSERT INTO " + arguments[0] ;
        //var keys = [];
        //var values = [];
        var data = this._form_sql_data(arguments[1]);
        sql += ' ('+data.keys.join(',')+') VALUES ('+data.values.join(',')+')';
        var callback = arguments[2];
        this.query(sql,function(res){
            console.log("INSERT Return ==> ");
            console.log(callback);
            if(callback){
                callback(res);
            }
        });
    },
    update: function() {
        var sql = "UPDATE " + arguments[0] +" SET ";
        var _a = [];
        for(var key in arguments[1]){
            var value = arguments[1];
            if(typeof arguments[1][key] == 'string'){
                value = '"' + arguments[1][key] + '"';
            }
            _a.push(arguments[1][key]+"="+value);
        }
        sql +=_a.join(',');
        console.log(sql);
        this.query(sql,function(res){
            console.log("INSERT Return ==> ");
            console.log(res);
        });
    }
};
module.exports = DataBase;