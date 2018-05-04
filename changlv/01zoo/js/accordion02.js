$(function() {
	var Accordion02 = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links02 = this.el.find('.link02');
		// Evento
		links02.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion02.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu02').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion02 = new Accordion02($('#accordion02'), false);
});