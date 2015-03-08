var fs = require('fs');
var path = require('path');
/**
 * 获取文件列表
 * @param path
 */
var getFileList = function(path){
    var fileList = [];
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
        if(fs.statSync(path + '/' + item).isDirectory()){
            walk(path + '/' + item);
        }else{
            fileList.push(path + '/' + item);
        }
    });
    return fileList;
};
//遍历当前目录
var travers= function(dir, callback){
    var fileList = getFileList(dir);
    for(var i=0; i<fileList.length; i++){
        var filename = path.basename(fileList[i],path.extname(fileList[i]));
        if(filename!='base'){
            var file = require(fileList[i]);
            callback(file);
        }
    }
};
exports.travers = travers;