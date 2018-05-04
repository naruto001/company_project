/**
 * Created by Administrator on 2017/10/20.
 */
$('.solve_1000 ul li').hover(function () {
    $(this).addClass('info')
},function () {
    $(this).removeClass('info')
})
function offtop(self, v) {
    $('html,body').animate({
        scrollTop: $(v).offset().top
    }, 800);
}
$('.solve_1000 li.solv_a1').on('click', function () {
    offtop(this, '.Ticketmanagement')
})

$('.solve_1000 li.solv_a2').on('click', function () {
    offtop(this, '.Marketingability')
})

$('.solve_1000 li.solv_a3').on('click', function () {
    offtop(this, '.Serviceexperience')
})