/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-04-28 11:10:55 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-28 11:11:36
 */

var num = 0;

var totalSlider = $('.co_list>li').length;

var sliderWidth = $('.co_list_box').width();

$(document).ready(function () {

    $('.co_list').width(totalSlider * sliderWidth);

    $('#co_next').on('click', function () {
        sliderRight();
    });

    $('#co_prev').on('click', function () {
        sliderLeft();
    });

    var autoSlider = setInterval(sliderRight, 5000);

    $('.co_box').hover(function () {
        $(this).addClass('active');
        clearInterval(autoSlider);
    }, function () {
        $(this).removeClass('active');
        autoSlider = setInterval(sliderRight, 5000);
    })

});

function sliderRight() {
    num++;
    if (num == totalSlider) {
        num = 0;
    };
    $('.co_list').animate({
        left: -(num * sliderWidth),
    }, 'ease')
}

function sliderLeft() {
    num--;
    if (num == -1) {
        num = totalSlider - 1;
    };
    $('.co_list').animate({
        left: -(num * sliderWidth),
    }, 'ease')
}
