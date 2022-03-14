// import slick from 'slick-carousel';
const slider = (params) => {
	const w = window.innerWidth;
	const activeMod = 'active_mod';
	const collapseMod = 'collapse_mod';

	const sliderList = $('.slider_list');
	const sliderItems = $('.slider_item');

	const elementsToShow = 5;
	const showInterval = 1500;

	let indexElem = 0; // get in class name 'item1, item2, ...'

	// interval show sliders
	const showSlidersInInterval = () => {
		const runInterval = () => {
			return setInterval(() => {
				sliderItems.addClass(collapseMod).removeClass(activeMod);
				$(sliderItems[indexElem % elementsToShow]).removeClass(collapseMod).addClass(activeMod);
				indexElem += 1;
			}, showInterval);
		};

		let refreshIntervalId = runInterval();

		sliderList.on('mouseover', (e) => {
			clearInterval(refreshIntervalId);
		});
		sliderList.on('mouseleave', (e) => {
			refreshIntervalId = runInterval();
		});
	};

	$(sliderItems[indexElem]).removeClass(collapseMod).addClass(activeMod);

	sliderList.slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: elementsToShow,
		adaptiveHeight: true,
		variableWidth: true,
	});

	sliderItems.on('mouseover', (e) => {
		if (e.target.closest('.slider_item_link')) return;

		showSlidersInInterval();

		// get element index from class name.
		// example 'class == item12, index == 12'
		indexElem = +$(e.currentTarget).attr('class').match(/item+\d/)[0].substring(4);

		sliderItems.addClass(collapseMod).removeClass(activeMod);

		const $this = $(e.currentTarget);

		$this.addClass(activeMod).removeClass(collapseMod);
	});
};

export { slider };
