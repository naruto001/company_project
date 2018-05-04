$(function () {
	$.fn.extend({
		juz: function () {
			for (var i = 0; i < $(this).length; i++) {
				$(this).eq(i).parent().css({
					"position": "relative"
				})
				$(this).eq(i).css({
					"position": "absolute",
					"top": ($(this).eq(i).parent().innerHeight() - $(this).eq(i).innerHeight()) / 2,
				})
			}
			for (var i = 0; i < $(this).length; i++) {
				$(this).eq(i).css({
					"left": ($(this).eq(i).parent().innerWidth() - $(this).eq(i).innerWidth()) / 2,
				})
			}
		}
	});
	//关于我们
	$(".aboutMe_conpw_pw1").hover(function () {
		$(".aboutMe_conpw_pw1 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw1_b.png")
	}, function () {
		$(".aboutMe_conpw_pw1 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw1.png")
	})
	$(".aboutMe_conpw_pw2").hover(function () {
		$(".aboutMe_conpw_pw2 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw2_b.png")
	}, function () {
		$(".aboutMe_conpw_pw2 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw2.png")
	})
	$(".aboutMe_conpw_pw3").hover(function () {
		$(".aboutMe_conpw_pw3 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw3_b.png")
	}, function () {
		$(".aboutMe_conpw_pw3 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw3.png")
	})
	$(".aboutMe_conpw_pw4").hover(function () {
		$(".aboutMe_conpw_pw4 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw4_b.png")
	}, function () {
		$(".aboutMe_conpw_pw4 img").attr("src", "http://www.pyticket.com/static/pymj/images/aboutMe_yw4.png")
	})
	var fixH = $(".nav_wrapper").outerHeight();
	var flag = 1;
	var topH = $("header").outerHeight() + $(".imgTit").outerHeight();
	$("#aboutMe_jj_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#aboutMe_gsjj").offset().top - fixH }, 300, function () {
				flag = 1;
			});

		}

	})
	$("#aboutMe_yw_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#aboutMe_yewu").offset().top - fixH }, 300, function () {
				flag = 1;
			});

		}

	})


	$(".aboutMe_conpw_pw").hover(function () {
		$(this).find('.aboutMe_animate').addClass('rotateIn');
	}, function () {
		$(this).find('.aboutMe_animate').removeClass('rotateIn');
	})
	//合作案例 238

	var index = 0;
	var timer = null;
	var index0 = $(".cooper_anli_1 ul li.cooper_active").index();
	$(".con_solul li span").juz()

	//复制第一张图片
	var firstimg = $('.cooper_anli').first().clone(),
		lastimg = $('.cooper_anli').last().clone();
	$('.anli_box').append(firstimg).prepend(lastimg).width($('.cooper_anli').length * ($('.cooper_anli').outerWidth()));

	function run() {
		if ($(".anli_box").is(":animated")) {
			return;
		}
		index++;
		$(".anli_box").animate({ left: "-=1200" }, 300, function () {
			if (index == 5) {
				index = 0;
				$(this).css({ left: "-1200px" });
			}
			$('.cooper_anli_1 li').eq(index).addClass("cooper_active").siblings().removeClass('cooper_active');
			var width = $('.cooper_anli_1 .cooper_triangle').css('left');
			$('.cooper_anli_1 .cooper_triangle').css('left', parseInt(width) + (index - index0) * 240);
			index0 = index;
		});
	}

	timer = setInterval(run, 5500);


	$(".cooper_anli_1 ul li").click(function () {
		if ($(".anli_box").is(":animated")) {
			return;
		}
		else {
			index = $(this).index();
			$(".anli_box").animate({ left: (index + 1) * -1200 }, 300);
			$(this).siblings().removeClass('cooper_active');
			$(this).addClass('cooper_active');
			var width = $('.cooper_anli_1 .cooper_triangle').css('left');
			$('.cooper_anli_1 .cooper_triangle').css('left', parseInt(width) + (index - index0) * 240);
			index0 = index;
		}
	})

	//hover不动
	$(".cooper_anli_1 ul li").hover(function () {
		clearInterval(timer);
	}, function () {
		timer = setInterval(run, 5500);
	})



	var index1 = true;
	$(".cooper_go_down").click(function () {
		$(".selectShow").toggle();
		if (index1) {
			$(".cooper_cus").css('height', "950px");
			index1 = false;
		}
		else {
			index1 = true;
			$(".cooper_cus").css('height', "735px");
		}
	})

	$("#cooper_anli_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#cooper_anli").offset().top - fixH }, 300, function () {
				flag = 1;

			});
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
		}

	})
	$("#cooper_cus_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#cooper_cus").offset().top - fixH }, 300, function () {
				flag = 1;
			});
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
		}

	})
	$("#cooper_channel_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#cooper_channel").offset().top - fixH }, 300, function () {
				flag = 1;
			});
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
		}

	})

	// 新闻

	$(".news_con ul.news_con0 li").click(function () {
		window.location.href = "../html/newDetails.html"
	})

	//joinUs 分销商
	$(".joinFx_submit").click(function () {
		$(".joinFx_form0").submit()
	})
	$(".joinFx_submit1").click(function () {
		$(".joinFx_form1").submit()
	})
	$("hr.join_hr").css("width", ($(".joinFx_form").innerWidth() - $(".join_tit").innerWidth()) / 2)
	//产品与服务
	for (var i = 0; i < $(".align_items").length; i++) {
		$(".align_items").eq(i).parent().css({
			"position": "relative",
		})

		$(".align_items").eq(i).css({
			"position": "absolute",
			"top": ($(".align_items").eq(i).parent().innerHeight() - $(".align_items").eq(i).innerHeight()) / 2
		})
	}
	for (var i = 0; i < $(".align_items").length; i++) {
		$(".align_items").eq(i).css({
			"left": ($(".align_items").eq(i).parent().innerWidth() - $(".align_items").eq(i).innerWidth()) / 2,
		})
	}

	//颜色渐变
	// $(".product_bac_li2").mouseover(function(e){
	// 	$(".product_bac_li2 div p").animate({
	// 		"color": "#fff"
	// 	},200)
	// })
	// $(".product_bac_li2").mouseout(function(e){
	// 	$(".product_bac_li2 div p").css({
	// 		"color": "#555555"
	// 	})
	// })

	$("#product_B2_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#product_B2").offset().top - fixH }, 300, function () {
				flag = 1;
			});
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
		}

	})
	$("#product_ser_a").click(function (e) {
		if ($('html,body').is(":animated")) {
			$('html,body').stop(true, true)
		}
		else {
			flag = 0;
			if (e && e.preventDefault) {
				e.preventDefault();
			}
			else {
				window.event.returnValue = false;
			}
			$('html,body').animate({ scrollTop: $("#product_ser").offset().top - fixH }, 300, function () {
				flag = 1;
			});
			$(this).addClass('nav_active').siblings().removeClass('nav_active');
		}

	})

	$(window).scroll(function () {
		if ($(window).scrollTop() > topH) {
			$(".nav_wrapper").css({
				"position": "fixed",
				"top": 0
			})
			$("#cooper_anli").css({
				"marginTop": fixH + 65
			})
			$("#aboutMe_gsjj").css({
				"marginTop": fixH + 65
			})
			$("#product_B2").css({
				"marginTop": fixH + 65
			})

		}
		else if ($(window).scrollTop() <= topH) {
			$(".nav_wrapper").css({
				"position": "static"
			})
			$("#cooper_anli").css({
				"marginTop": 65
			})
			$("#aboutMe_gsjj").css({
				"marginTop": 65
			})
			$("#product_B2").css({
				"marginTop": 65
			})
		}
		if (flag) {
			if ($("#cooper_cus")[0]) {
				if ($(window).scrollTop() < $("#cooper_cus").offset().top - topH) {
					$("#cooper_anli_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
				else if ($(window).scrollTop() > $("#cooper_cus").offset().top - topH && $(window).scrollTop() <= $("#cooper_channel").offset().top - topH) {
					$("#cooper_cus_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
				else if ($(window).scrollTop() > $("#cooper_channel").offset().top - topH) {
					$("#cooper_channel_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
			}

			if ($("#product_B2")[0]) {
				if ($(window).scrollTop() < $("#product_ser").offset().top - topH) {
					$("#product_B2_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
				else if ($(window).scrollTop() > $("#product_ser").offset().top - topH) {
					$("#product_ser_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
			}

			if ($("#aboutMe_gsjj")[0]) {
				if ($(window).scrollTop() < $("#aboutMe_yewu").offset().top - topH) {
					$("#aboutMe_jj_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
				else if ($(window).scrollTop() > $("#aboutMe_yewu").offset().top - topH) {
					$("#aboutMe_yw_a").addClass('nav_active').siblings().removeClass('nav_active');
				}
			}

		}
	})

	// 商务合作
	for (var i = 0; i < $(".con_solul li span").length; i++) {
		$(".con_solul li span").eq(i).css({
			"top": ($(".con_solul li span").eq(i).parent().innerHeight() - $(".con_solul li span").eq(i).innerHeight()) / 2
		})
	}
	//旅游企业


	$(".tourism_c3_ul li div.tourism_c3_ul_wrapper").juz();
	$(".tourism_c5_con div").juz();
	$(".agency_c3 div.agency_wrapper").juz();
	$(".agency_c4 div.agency_c4_wrapper").juz();




	//旅行社

	$(".agency_c4 li").hover(function () {
		$(this).find('img').addClass('bounceIn')
	}, function () {
		$(this).find('img').removeClass('bounceIn')
	})

	//OTA电商

	$(".ota_c1 li div.ota_c1_wrapper").juz();
	$(".ota_c1_li1").hover(function () {
		$(".ota_c1_li1 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota1.png");
		$(".ota_c1_li1 img").addClass('bounceIn')
	}, function () {
		$(".ota_c1_li1 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota1.jpg")
		$(".ota_c1_li1 img").removeClass('bounceIn')
	})
	$(".ota_c1_li2").hover(function () {
		$(".ota_c1_li2 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota2.png")
		$(".ota_c1_li2 img").addClass('bounceIn')
	}, function () {
		$(".ota_c1_li2 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota2.jpg")
		$(".ota_c1_li2 img").removeClass('bounceIn')
	})
	$(".ota_c1_li3").hover(function () {
		$(".ota_c1_li3 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota3.png")
		$(".ota_c1_li3 img").addClass('bounceIn')
	}, function () {
		$(".ota_c1_li3 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota3.jpg")
		$(".ota_c1_li3 img").removeClass('bounceIn')
	})
	$(".ota_c1_li4").hover(function () {
		$(".ota_c1_li4 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota4.png")
		$(".ota_c1_li4 img").addClass('bounceIn')
	}, function () {
		$(".ota_c1_li4 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota4.jpg")
		$(".ota_c1_li4 img").removeClass('bounceIn')
	})
	$(".ota_c1_li5").hover(function () {
		$(".ota_c1_li5 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota5.png")
		$(".ota_c1_li5 img").addClass('bounceIn')
	}, function () {
		$(".ota_c1_li5 img").attr("src", "http://www.pyticket.com/static/pymj/images/ota5.jpg")
		$(".ota_c1_li5 img").removeClass('bounceIn')
	})


	$(".sidebar ul li.lis2 a").click(function (e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		else {
			window.event.returnValue = false;
		}
	})
	$(".sidebar ul li.lis4 a").click(function (e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		else {
			window.event.returnValue = false;
		}
	})
	$(".lis2").hover(function () {
		$(".lis2_hide").css({
			"display": "block",
		})
		$(".lis2_hide").animate({
			"width": 220
		}, 100)
	}, function () {
		$(".lis2_hide").css({
			"display": "none",
		})
		$(".lis2_hide").animate({
			"width": 0,
		}, 100)
	})

	$(".lis4").click(function () {
		if ($("body,html").is(":animated")) {
			return;
		}
		$("body,html").animate({
			scrollTop: 0
		}, 500, function () {
			$(".sidebar").css('display', 'none')
		})

	})
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(window).height()) {
			$(".sidebar").css('display', 'block')
		}
		else {
			$(".sidebar").css('display', 'none')
		}
	})

	//首页选项卡
	$(".heZ_wrapper a").click(function (e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		else {
			window.event.returnValue = false;
		}
	})
	$(".a11").click(function () {
		$(".heZl").addClass('heZ_active');
		$(".heZlc").addClass('heZc_active');
		$(".heZr").removeClass('heZ_active');
		$(".heZrc").removeClass('heZc_active');
		$(".heZf").show();
		$(".heZg").hide()
	})
	$(".a12").click(function () {
		$(".heZr").addClass('heZ_active');
		$(".heZrc").addClass('heZc_active');
		$(".heZl").removeClass('heZ_active');
		$(".heZlc").removeClass('heZc_active');
		$(".heZf").hide();
		$(".heZg").show()
	})
	//首页加入
	$(".jiaR .jiaRc .jiaRg").hover(function () {
		$(this).siblings('p').removeClass('join_active')
		$(this).addClass('join_active')
	})
	$(".jiaR .jiaRc .jiaRf").hover(function () {
		$(this).siblings('p').removeClass('join_active')
		$(this).addClass('join_active')
	})
	//新闻
	$(".news_con0 li").hover(function () {
		if ($(this).is(":animated")) {
			$(this).stop()
		}
		$(this).animate({
			"left": "20px"
		}, 200)
	}, function () {
		// if($(this).siblings().is(":ainmated")){
		// 	$(this).siblings().stop()
		// }
		$(this).animate({
			"left": "0"
		}, 200)
	});


})

