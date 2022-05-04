var x = true;


$("html").click(function(){
    if(x){
        // 头部添加
        var title = document.title;
        var headerh = '<h3>'+title+'</h3><div><img src="https://file.xhto.cn/xpretty/images/himg.jpg" alt="[ '+title+' ]"/></div><p>不理白驹过隙，不信生死有命！</p><ul><li><a href="/">首页</a></li><li><a href="https://www.xhto.cn/">博客</a></li><li><a href="https://qm.qq.com/cgi-bin/qm/qr?k=XH_9CO9Wq05SzEFYKdVxHvciCgOVaDq3&jump_from=webapi">关于我们</a></li><li><a href="https://qm.qq.com/cgi-bin/qm/qr?k=XH_9CO9Wq05SzEFYKdVxHvciCgOVaDq3&jump_from=webapi">商业合作</a></li></ul>';
        $(".header").append(headerh);
    }
})

$(document).on('click','.buttons>span:eq(1) svg',function(){
    var $viwe = $(this).attr('viewBox');
    alert($viwe);
})


window.onload = function(){
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}