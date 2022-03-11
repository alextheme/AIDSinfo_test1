const slider = () => {
	const activeClass = 'active_mod';
	let currentElement = $('.slider_item.item1');
	let preventElement = null;

	currentElement.addClass(activeClass);

	$('.slider_item').on('mouseover', (e) => {
		if (e.target.closest('.slider_item__link')) {
			return;
		}

		if (currentElement) currentElement.removeClass(activeClass);

		currentElement = $(e.target).parent();

		if (preventElement) preventElement.removeClass(activeClass);
		currentElement.addClass(activeClass);
	});

	$('.slider_item').on('mouseleave', (e) => {
		preventElement = currentElement;
		currentElement = null;
	});
};

export { slider };
