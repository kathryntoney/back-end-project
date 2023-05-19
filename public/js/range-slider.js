
// // slider call

$('.price-range-slider').slider({
	range: true,
	min: 0,
	max: 40,
	values: [ 20, 25 ],
  step: 1,
	slide: function(event, ui) {
		
		$('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
		$('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
	}
});

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + "20" + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + "25" + '</span>');