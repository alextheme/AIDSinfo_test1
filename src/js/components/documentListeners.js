const documentListeners = () => {
	$(document).on('click', (e) => {
		e.stopPropagation();
		if (!$(e.target).closest('.header_menu__language').length) {
			$('.header_language__list').removeClass('header_language__list--visible_mod');
		}
	});
};

export { documentListeners };
