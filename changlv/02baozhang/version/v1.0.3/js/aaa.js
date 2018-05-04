
	
	$(".del").click(function (event) {
		event.stopPropagation()
		var _this = $(this)
		var btnArray = ['否', '是'];
		mui.confirm('<i class="iconfont icon_notice">&#xe64c;</i>确定删除当前记录', '', btnArray, function (e) {
			if (e.index == 1) {
				var data_id = _this.parent("li").attr("data-id")
				_this.parent("li").remove();
				jud();
				//				/这里请求数据在缓存中删除/
			} else {
				_this.siblings(".clom_lis_3").find(".ang_right").attr("data-tlogg", "0");
				_this.parent("li").animate(
					{ "left": "0px" },
					500
				);
			}
		})
	})
	var jud = function () {
		var lens = $(".list-ul>li").length;
		if (lens == "0") {
			$(".fymc_wrap").css({ "display": "none" });
		}
	}
	
	
	
	
	