var express = require('express');
var router = express.Router();
var utils = require('../utils');
var DataBase = require('../db');
global.db = new DataBase('mysql');
utils.travers(__dirname, function(file){
    console.log(file);
    //设置路由
    file.set(router);
});

module.exports = router;