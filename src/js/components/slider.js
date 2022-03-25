import '../plugins/slick/slick.min';

const slider = (params) => {
	const slickCurrent = 'slick-current';
	const slickActive = 'slick-active';
	const slickAnimation = 'slick-animation';

	const sliderList = $('.slider_list');
	const sliderItems = $('.slider_item');

	const elementsToShow = 5;
	const accordeonSpeed = 1500;
	let animationProcess = true;
	let indexElem = 0; // get in class name 'item1, item2, ...'

	// interval show sliders
	const autoPlayAccordionSlider = () => {
		const runInterval = () => {
			return setInterval(() => {
				sliderItems.removeClass(slickCurrent);
				$(sliderItems[indexElem % elementsToShow]).addClass(slickCurrent);
				indexElem += 1;
			}, accordeonSpeed);
		};

		let refreshIntervalId = runInterval();

		sliderList.on('mouseover', (e) => {
			clearInterval(refreshIntervalId);
		});
		sliderList.on('mouseleave', (e) => {
			refreshIntervalId = runInterval();
		});
	};

	$(sliderItems[indexElem]).addClass(slickCurrent);

	sliderList.slick({
		arrows: false,
		dots: false,
		slidesToShow: elementsToShow,
		adaptiveHeight: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					infinite: true,
					dots: true,
					slidesToShow: 1,
					speed: 300,
					// autoplay: true,
					adaptiveHeight: false,
					variableWidth: false,
				},
			},
		],
	});

	let windowWidth = window.innerWidth;

	$(window).on('resize', () => {
		windowWidth = window.innerWidth;
	});

	if (windowWidth > 1023) {
		sliderItems.on('mouseover', (e) => {
			if (e.target.closest('.slider_item_link')) return;

			const $this = $(e.currentTarget);

			// autoPlayAccordionSlider();
			// get element index from class name.
			// example 'class == item12, index == 12'
			indexElem = +$this.attr('class').match(/item+\d/)[0].substring(4);

			if (animationProcess) {
				animationProcess = false;
				sliderItems.removeClass(slickCurrent).removeClass(slickActive).addClass(slickActive);
				$this.addClass(slickCurrent);
			}

			setTimeout(() => {
				animationProcess = true;
			}, 10);
		});
	}
};

export { slider };
