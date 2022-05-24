import '../plugins/slick/slick.min';
import { onWindowResize,	getWindowSize } from 'utils';

/** variable */
let $currentElement = null;
let isMouseOverSlider = false;
let animate = true;
let isMobile = true;

/**
 * Get data-slick-index value
 * @param {HTMLElement | jQuery<HTMLElement>} elem HTMLElement
 * @returns number
 */
const getDataSlickIndex = (elem) => {
	try {
		return +elem.parentNode.getAttribute('data-slick-index');
	} catch {
		return +$(elem).attr('data-slick-index');
	}
};

/**
 * Get next index slider element
 * @param {HTMLElement | jQuery<HTMLElement>} elem
 * @returns number
 */
const getNextIndex = (elem, numberElements) => {
	const indexElem = getDataSlickIndex(elem);
	return indexElem === numberElements - 1 ? 0 : indexElem + 1;
};

/**
 * Removes the class from all elements and adds to the current one
 * @param {jQuery<HTMLElement>} sliderItems jQuery slider items elements
 * @param {jQuery<HTMLElement>} item jQuery item
 */
const makeAnimation = (sliderItems, item, className) => {
	// Condition for the prevention of twitching during animation
	if (animate) {
		animate = false;
		sliderItems.removeClass(className);
		item.addClass(className);

		// pause to prevent twitch during animation
		setTimeout(() => {
			animate = true;
		}, 100);
	}
};

/**
 * Auto play interva
 * @param {jQuery<HTMLElement>} sliderItems collections elemens
 */
const autoPlayAccordionSlider = (sliderItems, className, pause, numberElements) => {
	setInterval(() => {
		if (!isMobile && !isMouseOverSlider) {
			$currentElement = $(sliderItems[getNextIndex($currentElement, numberElements)]).addClass(className);
			makeAnimation(sliderItems, $currentElement, className);
		}
	}, pause);
};

/**
 * Main method
 * @param {object variables} GLOBAL_VARS
 */
const slider = (GLOBAL_VARS) => {
	const currClassName = 'slick-current';
	const $sliderItems = $('.slider_item');
	const accordeonPause = 2000;
	const elementsToShow = 5;

	// slick-slider
	$('.slider__list').slick({
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
					speed: 500,
					// autoplay: true,
					adaptiveHeight: false,
					variableWidth: false,
				},
			},
		],
	});

	isMobile = getWindowSize().windowWidth < GLOBAL_VARS.mediaPoint1;

	onWindowResize(() => {
		isMobile = getWindowSize().windowWidth < GLOBAL_VARS.mediaPoint1;
	});

	$currentElement = $($sliderItems[0]);

	// auto play accordion
	autoPlayAccordionSlider($sliderItems, currClassName, accordeonPause, elementsToShow);

	// the mouse is over the slider
	$('.section.slider').on('mouseover', () => { isMouseOverSlider = true; });
	$('.section.slider').on('mouseout', () => { isMouseOverSlider = false; });

	$('.section.slider').on('mousemove', (event) => {
		if (isMobile) return;

		const elementsUnderTheMouse = document.elementsFromPoint(event.clientX, event.clientY);

		$(elementsUnderTheMouse).each((_, item) => {
			if ($(item).hasClass('slider_item')) {
				makeAnimation($sliderItems, $(item), currClassName);
			}
		});
	});
};

export { slider };
