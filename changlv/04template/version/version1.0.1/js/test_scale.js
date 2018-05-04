$(document).ready(function () {
    //手机壳子容器
    var teleBox = $('.show').find('.wrap');
    //缩小按钮
    var smallBtn = $('.scale_btn').find('.small');
    //放大按钮
    var bigBtn = $('.scale_btn').find('.big');
    //显示的缩放比
    var scaleNum = $('.scale_btn').find('.scale_num');

    var num = 1;

    //点击放大按钮
    bigBtn.on('click', function () {
        num = num + 0.2;

        if (num > 1.6) {
            num = 1.8;
        };

        teleBox.css({
            'transform': 'scale( ' + num + ' )'
        });
        scaleNum.html(' ' + 100 * num + '% ');

        var a = ''+160*num+'px';
        teleBox.parent().css('padding-top', a);
        teleBox.parent().css('padding-bottom', a);
 
    });

    //点击缩小按钮
    smallBtn.on('click', function () {

        num = Math.floor((num - 0.2) * 100) / 100;

        if (num < 0.8) {
            num = 0.8;
        };

        teleBox.css({
            'transform': 'scale(' + num + ')',
        });
        scaleNum.html('' + 100 * num + '%');
        var b = ''+130*num+'px';
        teleBox.parent().css('padding-top',b);
        teleBox.parent().css('padding-bottom',b);
    });
})