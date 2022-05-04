/*
 * name : Future
 * edition : 2.0.2
 * message : 前端美化样式由星环[Future]提供，程序由Alist创始者友情提供
 * technical support : https://www.xhto.cn/
 */

var x = true;

$("html").click(function() {
    if (x) {
        var title = document.title,
            // 个人信息编写区域+星环博客提供技术支持+ —————— ON

            // 头像链接地址
            headimg = "",
            // 博主铭言句子
            motto = "",
            // 配置 - 导航内容及链接【注：名称和链接需要一一对应，用英文逗号隔开】
            linkname = ["首页", "星环博客"],
            link = ["/", "https://www.xhto.cn/"],
            code = "";

        // 个人信息编写区域+星环博客提供技术支持+ —————— END

        // 程序化代码
        code += '<h3>' + title + '</h3>';
        code += '<div >< img src = "' + headimg + '" alt = "[ ' + title + ' ]" / >< /div>';
        code += '<p>' + motto + '</p >';
        code += '< ul >';
        for (vo in linkname) {
            code += '<li> < a href = "' + link[vo] + '" > ' + linkname[vo] + ' < /a></li >';
        }
        code += '< /ul>';

        // 代码写入视觉程序
        $(".header").append(code);
    }
})

// 支持样式代码
$(document).on('click', '.buttons>span:eq(1) svg', function() {
    var $viwe = $(this).attr('viewBox');
    alert($viwe);
})

window.onload = function() {
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}