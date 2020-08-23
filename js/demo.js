(function($) {
	function init() {

		var options = {
			type: 'standard',
			active_position: 70,
			strip_size : 'full',
			fixed: true,
			stackActivationWidth: 900,
			showNextSlideButton: true,
			nextSlideButtonSelector: ".next-slide-btn",
			
		};

		$('section').stacked_strips(options);
	}
  $(init);
})(jQuery);

