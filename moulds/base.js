/**
 * base Ä£ÐÍ
 */

var Base = function(){
    this.obj = {};
};
Base.prototype.setProperties = function(req){
    for(var key in this.obj){
        this.obj[key] = req.body[key];
    };
};
Base.prototype.getProperties = function(){
    return this.obj;
};
module.exports = Base;