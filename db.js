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
     * arguments [1.table name 2.fields name , 3.values, 4.callback 回调函数]
     */
    insert: function() {
        var sql = "INSERT INTO " + arguments[0] ;
        var value = " (";
        for(var i=0; i<arguments[2].length; i++){
            if(typeof arguments[2][i] === 'string'){
                value += "'" +arguments[2][i]+ "'";
            } else {
                value += arguments[2][i];
            }
            if(i<arguments[2].length-1){
                value += ",";
            }
        }
        value += ")";
        var field = arguments[1] ? "(" + arguments[1].join(",") + ")" : '';
        sql += field + " VALUES " + value ;
        //console.log(sql);
        var callback = arguments[3]
        this.query(sql,function(res){
            console.log("INSERT Return ==> ");
            console.log(res);
            console.log(callback);
            if(callback){
                callback(res);
            }
        });
    },
    update: function() {
        var sql = "UPDATE " + arguments[0] +" SET ";
        for(var i=0; i<arguments[2].length; i++){
            var value = '';
            if(typeof arguments[2][i] === 'string'){
                value += "'" +arguments[2][i]+ "'";
            } else {
                value += arguments[2][i];
            }
            if(i<arguments[2].length-1){
                sql += arguments[1][i] + "=" +value+","
            } else {
                sql += arguments[1][i] + "=" +value;
            }
        }
        sql +=" " + arguments[3];
        console.log(sql);
        this.query(sql,function(res){
            console.log("INSERT Return ==> ");
            console.log(res);
        });
    }
};
module.exports = DataBase;