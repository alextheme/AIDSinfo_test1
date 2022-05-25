let windowWidth = window.innerWidth;

$(window).on('resize', () => {
	windowWidth = window.innerWidth;
});

// console . log ( $ body );

const search = (v) => {
	// ----------------------------animation height section search block
	const btn = $('.btn_wiev_more');
	const searchBlock = $('.search_popular_w');
	const prevHeight = searchBlock.height();

	btn.on('click', () => {
		// scroll
		const sectionTop = $('.search').position().top;
		const heightHeader = window.getComputedStyle(document.documentElement).getPropertyValue('--height-header').replace(/[^0-9.]/g, '') * 10;
		window.scrollTo(0, sectionTop - heightHeader);

		// size height
		const heightCorrection = 40;
		const height = $('.search_popular__list').height();

		if (btn.hasClass('open_list_mod')) {
			btn.removeClass('open_list_mod');
			searchBlock.animate({ height: `${prevHeight}px` });
		} else {
			btn.addClass('open_list_mod');
			searchBlock.animate({ height: `${height + heightCorrection}px` });
		}

		searchBlock.toggleClass('open_list_mod');
	});
	// ----------------------------animation height section search block###

	$('.header__search_btn').on('click', () => {
		$('.section.search').addClass('open_search_mob');
	});

	$('.btn_close_srch').on('click', () => {
		$('.btn_wiev_more').removeClass('active_mod');
		$('.search_popular__list').removeClass('full_size_mod');
		$('.section.search').removeClass('open_search_mob');
	});
};

export { search };
