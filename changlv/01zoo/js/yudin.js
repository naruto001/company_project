$( function () {
	$('.yudin').click( function () {
		$('#yd_cover').css('display','block');
	} );
	$('.yd_close').click( function () {
		$('#yd_cover').css('display','none');
	} );
	//点击“-”减少数量
	$('.del').click( function () {
		var del = $('.buy_num').text() - 1;
		if(del<0) {
			$('.buy_num').text(0);
		}else {
			$('.buy_num').text(del);
		}
	} );
	//点击“+”增加数量
	$('.add').click( function () {
		var add = parseInt($('.buy_num').text()) + 1;
		$('.buy_num').text(add);
	} );
} )