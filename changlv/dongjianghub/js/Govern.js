/**
 * Created by Administrator on 2017/9/11.
 */
//轮播图
$(".newx_lb").slide({
    mainCell: ".lb_img ul",
    autoPlay: true,
    interTime: 5000,
    effect:"left",
});
//动态切换
$(".notice_news").slide({
    effect:"left",
    delayTime:500,
    easing:"easeOutCirc"
});
//机构选项卡
$(".introduction").slide({
    effect:"fold",
    delayTime: 300,

});