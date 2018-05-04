jQuery.fn.selectFilter = function (options){
	var defaults = {
		callBack : function (res){}
	};
	var ops = $.extend({}, defaults, options);
	var selectList = $(this).find('select option');
	var that = this;
	var html = '';
	
	// 读取select 标签的值
	html += '<ul class="filter_list">';
	
	$(selectList).each(function (idx, item){
		var val = $(item).val();
		var valText = $(item).html();
		var selected = $(item).attr('selected');
		var disabled = $(item).attr('disabled');
		var isSelected = selected ? 'filter_selected' : '';
		var isDisabled = disabled ? 'filter_disabled' : '';
		if(selected) {
			html += '<li class="'+ isSelected +'" data-value="'+val+'"><a title="'+valText+'">'+valText+'</a></li>';
			$(that).find('.filter_title').val(valText);
		}else if (disabled){
			html += '<li class="'+ isDisabled +'" data-value="'+val+'"><a>'+valText+'</a></li>';
		}else {
			html += '<li data-value="'+val+'"><a title="'+valText+'">'+valText+'</a></li>';
		};
	});
	
	html += '</ul>';
	$(that).append(html);
	$(that).find('select').hide();
	
	//点击选择
	$(that).on('click', '.filter_text', function (){
		$(that).find('.filter_list').slideToggle(100);
		$(that).find('.filter_list').toggleClass('filter_open');
		$(that).find('.icon_filter_arrow').toggleClass('filter_show');
	});
	
	//点击选择列表
	$(that).find('.filter_list li').not('.filter_disabled').on('click', function (){
		var val = $(this).data('value');
		var valText =  $(this).find('a').html();
		$(that).find('.filter_title').val(valText);
		$(that).find('.icon_filter_arrow').toggleClass('filter_show');
		$(this).addClass('filter_selected').siblings().removeClass('filter_selected');
		$(this).parent().slideToggle(50);
		for(var i=0; i<selectList.length; i++){
			var selectVal = selectList.eq(i).val();
			if(val == selectVal) {
				$(that).find('select').val(val);
			};
		};
		ops.callBack(val); //返回值
	});
	
	//其他元素被点击则收起选择
	$(document).on('mousedown', function(e){
		closeSelect(that, e);
	});
	$(document).on('touchstart', function(e){
		closeSelect(that, e);
	});
	
	function closeSelect(that, e) {
		var filter = $(that).find('.filter_list'),
			filterEl = $(that).find('.filter_list')[0];
		var filterBoxEl = $(that)[0];
		var target = e.target;
		if(filterEl !== target && !$.contains(filterEl, target) && !$.contains(filterBoxEl, target)) {
			filter.slideUp(50);
			$(that).find('.filter_list').removeClass('filter_open');
			$(that).find('.icon_filter_arrow').removeClass('filter_show');
		};
	}
};
