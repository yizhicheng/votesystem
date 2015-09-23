/**
 * 图片懒加载和数据懒加载
 * @param  {[String]} el [description]
 * @return {[Function]}    [lazyload(".lazyimg") or $(".lazyimg").lazyload();]
 *
 *  var total = 10
 * 	$(".loadmore").lazyload(function(el){
 * 		if(total <= 0){
 * 		// 已经最后一页，无需再次加载
 * 			el.attr("data-src","done");
 * 			return;
 * 		}
 * 		el.append('<div style="height:2rem;line-height:2rem;background:#ccc;margin:10px 0;">加载的内容</div>')
 * 		total--;
 * 	});
 * 
 * 
 * 
 * 
 * 
 */
;(function(root, factory){
    if (typeof module !== 'undefined' && module.exports) { // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // AMD / RequireJS
        define(factory);
    } else {
        root.lazyload = factory.call(root);
    }
})(this, function(){
    'use strict';
    function lazyload(el, callBack){
        var delay = null;
        $(el).find("img").each(function(){
            !$(el).hasClass("lazyimg") && $(el).addClass("lazyimg");
            var _this = $(this)[0];
            if(_this.getAttribute("data-src") == null){
                return;
            }
            if($(this).offset().top < window.innerHeight && _this.getAttribute("data-src") != "done"){
                _this.onerror = function(){
                    this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                }
                _this.src = _this.getAttribute("data-src");
                _this.setAttribute("data-src","done");
            }
        });

        window.addEventListener("scroll", function(){
            delay = setTimeout(function(){

                $(el).find("img").each(function(){

                    !$(el).hasClass("lazyimg") && $(el).addClass("lazyimg");
                    var _this = $(this)[0];
                    if(_this.getAttribute("data-src") == null){
                        return;
                    }
                    var top = $(this).offset().top;
                    var h = window.innerHeight || window.screen.height;
                    if(window.pageYOffset > top + h || window.pageYOffset < top - h && _this.getAttribute("data-src") != "done"){
                        clearTimeout(delay);
                        return;
                    }
                    if(window.pageYOffset > top - h && _this.getAttribute("data-src") != "done"){
                        _this.onerror = function(){
                            this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                        }
                        _this.src = _this.getAttribute("data-src");
                        _this.setAttribute("data-src","done");
                    }
                });
                if(typeof callBack == "function"){
                    $(el).each(function(){
                        var _this = $(this)[0];
                        var top = $(this).offset().top;
                        var h = window.innerHeight || window.screen.height;
                        if(window.pageYOffset > top + h || window.pageYOffset < top - h && _this.getAttribute("data-loaded") != "done"){
                            clearTimeout(delay);
                            return;
                        }
                        if(window.pageYOffset > top - h - 30 && _this.getAttribute("data-loaded") != "done"){
                            callBack($(el));
                        }
                    });
                }
                    

            },80)
        }, false);
		setTimeout(function(){$(window).trigger('scroll')},0);
    };
    if (window.Zepto || window.jQuery) {
        (function($) {
            $.fn.lazyload = function(callBack) {
                return this.each(function() {
                    lazyload($(this),callBack);
                });
            }
        })(window.Zepto || window.jQuery);
    }
    return lazyload;
});
