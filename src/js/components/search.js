let windowWidth = window.innerWidth;

$(window).on('resize', () => {
	windowWidth = window.innerWidth;
});

// console . log ( $ body );

const search = (v) => {
	$('.btn_wiev_more').on('click', () => {
		$('.btn_wiev_more').toggleClass('active_mod');
		$('.search_popular__list').toggleClass('wiev_more_mod');

		const sectionTop = $('.search').position().top;

		const heightHeader = window.getComputedStyle(document.documentElement).getPropertyValue('--height-header').replace(/[^0-9.]/g, '') * 10;
		const heightHeaderMob = window.getComputedStyle(document.documentElement).getPropertyValue('--height-header-mobile').replace(/[^0-9.]/g, '') * 10;

		console.log('v: ', v);

		window.scrollTo(0, sectionTop - heightHeader);
	});

	$('.header__search_btn').on('click', () => {
		$('.section.search').addClass('open_search_mob');
	});

	$('.btn_close_srch').on('click', () => {
		$('.section.search').removeClass('open_search_mob');
	});
};

export { search };
