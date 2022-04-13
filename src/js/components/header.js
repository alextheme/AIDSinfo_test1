import '../plugins/select2/select2.min';
import { WOW } from '../plugins/wow/wow.min';

const selectLanguage = () => {
	const toggleClassInObjects = () => {
		$('.header_language__list').toggleClass('visible_mod');
		$('.header_language_btn__arrow .icon').toggleClass('rotate_mod');
	};

	$('.header_language_btn').on('click', (e) => {
		e.preventDefault = false;
		toggleClassInObjects();
	});

	$('.header_language__item').on('click', (e) => {
		e.preventDefault = false;
		const activeMod = 'header_language__item--active_mod';

		$('.header_language__item').each((num, item) => {
			$(item).removeClass(activeMod);
		});
		$(e.target).parent().addClass(activeMod);

		$('.header_language_btn__title').text(e.target.textContent);
		toggleClassInObjects();
	});
};

const triggerMenu = () => {
	const $menuTrigger = $('.menuTrigger');
	const $body = $('body');

	$menuTrigger.on('click', (e) => {
		e.preventDefault();
		const $this = $(e.currentTarget);

		if ($body.hasClass('menu_open')) {
			$body.removeClass('menu_open');
			$this.removeClass('active_mod');
		} else {
			$body.addClass('menu_open');
			$this.addClass('active_mod');
		}
	});
};

const selectTwo = () => {
	$('.languageSelect').select2({
		minimumResultsForSearch: Infinity,
		width: '8rem',
		selectionCssClass: 'header_mobile--mobile_lang_btn_mod',
		dropdownCssClass: 'header_mobile--mobile_lang_list_mod',
	});
};

const searchElement = () => {
	const closeButton = $('.search_block_close_btn');
	const searchButton = $('.header_mobile_search_btn');

	closeButton.on('click', (e) => {
		$('.search_section').toggleClass('open_search_block_mobile');
	});

	searchButton.on('click', (e) => {
		$('.search_section').toggleClass('open_search_block_mobile');
	});
};

const header = () => {
	selectLanguage();
	triggerMenu();
	selectTwo();
	searchElement();

	// new WOW().init();
};

export { header };
