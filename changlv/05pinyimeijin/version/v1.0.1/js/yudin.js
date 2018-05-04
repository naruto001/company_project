/**
 * Created by Administrator on 2017/11/23.
 */
$(function () {
    //大图切换 autoPlay加上这个参数可以自动轮播，设置为true
    $(".thumbnail").slide({
        // autoPlay:true,
        titCell: ".smallimg li", mainCell: ".bigimg", effect: "fold", delayTime: 200, trigger: "click",
        startFun: function (i, p) {
            //控制小图自动翻页
            if (i == 0) {
                $(".thumbnail .sPrev").click()
            } else if (i % 5 == 0) {
                $(".thumbnail .sNext").click()
            }
        }
    });
    //小图左滚动切换
    $(".thumbnail .smallscroll").slide({
        mainCell: "ul",
        delayTime: 100,
        vis: 5,
        scroll: 5,
        effect: "left",
        autoPage: true,
        prevCell: ".sPrev",
        nextCell: ".sNext",
        pnLoop: false
    });
});

//浮动二级导航
var tktapheight = $('.dy_nav').offset().top;
console.log(tktapheight)
$(window).scroll(function () {
    if ($(document).scrollTop() > tktapheight) {
        $('.dy_nav').addClass('nav_box');
    } else {
        $('.dy_nav').removeClass('nav_box');
    }
})

function h(id) {
    var arr = [];
    id.each( function (i) { arr.push(id.eq(i).offset().top - $('.dy_nav').height() -200 ) } );

    for( var i=0; i<arr.length; i++ ) {
        if( $(document).scrollTop() > arr[i] ) {
            tab(i,'dy_active' )
        }
    };
}
function tab(i , clas) {
    $('.dy_nav li').removeClass(clas).eq(i).addClass(clas);

};
$(window).scroll( function() { h( $('.dy_anchor') ) } );

$(".dy_nav li").click(function () {
    if ($('html, body').is(':animated')) {
        return ;
    }
    var index = ($(".dy_nav li")).index($(this));
    var goTo = $('.dy_anchor').eq(index).offset().top - $(".dy_nav").height() - 50;
    $("html, body").animate({
        scrollTop: goTo
    }, 200);
});

