var fs = require('fs');
var path = require('path');
/**
 * 深度遍历 获取文件列表
 * @param dir
 */
var getFileList = function(dir){
    var fileList = [];
    var dirList = fs.readdirSync(dir);
    dirList.forEach(function(item){
        if(fs.statSync(dir + '/' + item).isDirectory()){
            walk(dir + '/' + item);
        }else{
            fileList.push({
                path: dir + '/' + item,
                fileName: path.basename(item,path.extname(item)),
                extName: path.extname(item)
            });
        }
    });
    return fileList;
};
//遍历当前目录
var travers= function(dir, callback){
    var fileList = getFileList(dir);
    for(var i=0; i<fileList.length; i++){
        var fileName = fileList[i].fileName;
        if(fileName!='base'){
            var file = require(fileList[i].path);
            callback(file);
        }
    }
};
exports.travers = travers;