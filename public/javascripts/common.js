/**
 * 5�����ת�Ĺ�������
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