const slider = () => {
	const activeMod = 'active_mod';
	const collapseMod = 'collapse_mod';

	$('.slider_item.item1').removeClass(collapseMod).addClass(activeMod);

	$('.slider_item').on('mouseover', (e) => {
		if (e.target.closest('.slider_item_link')) return;

		$('.slider_item').addClass(collapseMod).removeClass(activeMod);

		const $this = $(e.currentTarget);

		$this.addClass(activeMod).removeClass(collapseMod);
	});
};

export { slider };
