/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

const selectLanguage = () => {
	$('.header_menu__language_btn').on('click', (e) => {
		e.preventDefault = false;

		$('.header_language__list').toggleClass('header_language__list--visible_mod');
	});

	$('.header_language__item').on('click', (e) => {
		e.preventDefault = false;
		const activeMod = 'header_language__item--active_mod';

		$('.header_language__item').each((num, item) => {
			$(item).removeClass(activeMod);
		});
		$(e.target).parent().addClass(activeMod);

		$('.header_menu__language_btn_title').text(e.target.textContent);
	});
};

export { selectLanguage };
