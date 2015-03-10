/**
 * base Ä£ÐÍ
 */

var Base = function(){
    this.obj = {};
};
Base.prototype.setProperties = function(req){
    for(var key in this.obj){
        this.obj[key] = req.body[key] ? req.body[key] : (req.query[key] ? req.query[key] : undefined);
    };
};
Base.prototype.getProperties = function(){
    return this.obj;
};
module.exports = Base;