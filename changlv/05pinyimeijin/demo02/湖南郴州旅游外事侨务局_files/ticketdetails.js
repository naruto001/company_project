/**
 * Created by Administrator on 2017/11/23.
 */
$(function () {
    //大图切换 autoPlay加上这个参数可以自动轮播，设置为true
    $(".thumbnail").slide({
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
var tktapheight = $('.tk_tab').offset().top;
console.log(tktapheight)
$(window).scroll(function () {
    if ($(document).scrollTop() > tktapheight) {
        $('.tk_tab').addClass('tab_box') 
    } else {
        $('.tk_tab').removeClass('tab_box')
    }
})

//浮动定位二级导航栏目
function h(id) {
    // debugger;
    // 把几个锚点的位置作为一个数组集合
    var arr = [];

    // 遍历锚点
    id.each(function (i) {
        // 向锚点数组添加数据
        /*
         *id.eq(i).offset().top 第i个锚点的垂直偏移值
         *$(".tk_tab").height() 导航条的高度
         *减掉250？
        */
        arr.push(id.eq(i).offset().top - $(".tk_tab").height() - 250);
    });
    for (var i = 0; i < arr.length; i++) {
        // 滚动条的滚动距离$(document).scrollTop()
        // 大于锚点数组的对应项的数值
        if ($(document).scrollTop() > arr[i]) {
            tab1(i, 'active');
        }
        alert( arr[i] );
    }
}
function tab1(i, clas) {
    $('.tk_tab li').removeClass(clas).eq(i).addClass(clas);
}
$(window).scroll(function () {
    h($('.Anchor'));
});
$(".tk_tab li").click(function () {
    if ($('html, body').is(':animated')) {
        return ;
    }
    var index = ($(".tk_tab li")).index($(this));
    var goTo = $('.Anchor').eq(index).offset().top - $(".tk_tab").height() - 50;
    $("html, body").animate({
        scrollTop: goTo
    }, 500);
});


//景点产品点击显示隐藏
$('.list_info .list_name').on('click', function () {
    $(this).find('i').toggleClass('active');
    $(this).parents().find('.list_info_hide').toggle();
    $(this).parents('li').siblings().find('.list_info_hide').hide();
})
$('.packup_btn').on('click', function () {
    $('.list_info_hide').hide();
})