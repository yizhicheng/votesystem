/**
 * ��ҳ�����(ȱ��ÿҳ����ʾ����listrows����д)
 * @param page {Number} ��ǰҳ
 * @param pagesize {Number} ÿҳ��¼��
 * @param total {Number} �ܼ�¼��
 * @constructor
 */
function Paginate(page, pagesize, total){
    if(!page || page <1){
        page = 1;
    }
    if(!pagesize || pagesize<1){
        pagesize = 20;
    }
    if(!total || total <0){
        total = 0;
    }
 
    this.pagesize = pagesize;
    this.total = total;
    if(this.total%this.pagesize ===0){
        this.maxpage = parseInt(this.total/this.pagesize);
    }else{
        this.maxpage = parseInt(this.total /this.pagesize) + 1;
    }
 
    if(page>this.maxpage){
        this.page = this.maxpage;
    }else{
        this.page = page;
    }
 
}
 
 
/*
* ��ǰ��ʼ������
*/
Paginate.prototype.first = function(){
    var first = (this.page-1)*this.pagesize;
    if(first>this.total){
        return (this.maxpage-1)*this.pagesize;
    }
    return first; 
}
 
/*
* ��ǰҳ��������
*/
Paginate.prototype.last = function(){
    var last = this.first()+this.pagesize;
    if(last>this.total){
        return this.total;
    }
    return last;
}
 
 
/**
 * ��һҳ
 * @returns {number}
 */
Paginate.prototype.prev = function(){
    if(this.page <= 1){
        return false;
    }
    return this.page-1;
}
 
 
/**
 * ��һҳ
 * @returns {*}
 */
Paginate.prototype.next = function(){
    if(this.page >= this.maxpage){
        return false;
    }
    return (parseInt(this.page)+1);
}
 
module.exports = Paginate;
