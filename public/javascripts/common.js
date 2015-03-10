/**
 * 5秒后跳转的公共方法
 */
function jumpLink(url,num){
    var num = num || 5;
    var jump = setInterval(function(){
        var jumpTo = $('#jumpTo');
        num--;
        if(num<=1){
            clearInterval(jump);
            location.href = url;
        }
        jumpTo.text(num);
    },1000);
}