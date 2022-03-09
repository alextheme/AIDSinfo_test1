const slider = () => {
	const activeClass = 'active';
	let currentElement = $('.slider_item.item1');
	let preventElement = null;

	currentElement.addClass(activeClass);

	$('.slider_item').on('mouseover', (e) => {
		console.log('mouseover');
		// if (e.target.closest('.slider_item__link')) {
		// 	return;
		// }

		// if (currentElement) currentElement.removeClass(activeClass);

		// currentElement = $(e.target).parent();

		// if (preventElement) preventElement.removeClass(activeClass);
		// currentElement.addClass(activeClass);
	});

	$('.slider_item').on('mouseleave', (e) => {
		console.log('.... leave');
		preventElement = currentElement;
		currentElement = null;
	});
	$('.slider_item').on('mouseenter', (e) => {
		console.log('mouseenter');
	});
	$('.slider_item').on('mouseout', (e) => {
		console.log('mouseout');
	});
};

export { slider };
