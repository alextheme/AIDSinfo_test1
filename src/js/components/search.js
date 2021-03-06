const search = () => {
	const mods = {
		open: 'search--open_mod',
		openBtn: 'btn_view_more--open_mod',
		maxHeight: 'search_popular_w--height_mod',
		closeMask: 'search_mask--close_mod',
	};
	const $searchSection = $('.section.search');
	const $searchListWrapper = $('.search_popular_w');
	const $buttonExpandList = $('.btnViewFullList');
	const prevHeight = $searchListWrapper.height();
	const textButtonOpenFullList = { open: $buttonExpandList.text(), close: 'collapse list' };
	const correctionHeight = 250;

	/**
	 * Get list height in collapsed or expanded state
	 * @returns {number|*}
	 */
	const getListHeight = () => {
		if ($searchSection.hasClass(mods.open)) {
			console.log('1');
			return window.innerHeight - correctionHeight;
		} else {
			const heightCorrection = 42;
			console.log('2');
			return $('.search_popular__list').height() + heightCorrection;
		}
	};

	/**
	 * Scroll page to top element 'section'
	 */
	function makeScrollTop() {
		if (!$searchSection.hasClass(mods.open)) {
			const topMargin = window.getComputedStyle(document.documentElement).getPropertyValue('--height-header').replace(/[^0-9.]/g, '') * 10;
			window.scrollTo(0, $searchSection.position().top - topMargin);
		}
	}

	/**
	 * Change list height
	 */
	function toggleHeight() {
		if ($buttonExpandList.hasClass(mods.openBtn)) {
			$buttonExpandList
				.text(textButtonOpenFullList.open)
				.removeClass(mods.openBtn);
			$searchListWrapper
				.animate({ maxHeight: `${prevHeight}px` })
				.removeClass(mods.maxHeight)
				.scrollTop(0);
		} else {
			$buttonExpandList
				.text(textButtonOpenFullList.close)
				.addClass(mods.openBtn);
			$searchListWrapper
				.animate({ maxHeight: `${getListHeight()}px` })
				.addClass(mods.maxHeight);
		}
	}

	/**
	 * Create a mask to bind the search window close event to it
	 * @returns {HTMLDivElement}
	 */
	const createMask = () => {
		const mask = document.createElement('div');
		mask.classList.add('search_mask', mods.closeMask);
		$searchSection.append(mask);
		return mask;
	};

	/**
	 * Closing the search window
	 * @param mask to remove unwanted element
	 */
	const closeSearchSection = (mask) => {
		$searchSection.removeClass(mods.open);
		mask.remove();
	};

	/**
	 * Opening the search window
	 */
	function openSearchSection() {
		$searchSection.addClass(mods.open);
		if ($buttonExpandList.hasClass(mods.openBtn)) {
			$searchListWrapper.css({ height: `${window.innerHeight - correctionHeight}px` });
		}
	}

	/**
	 * open/close search mobile
	 */
	$('.btnOpenSearchMob').on('click', () => {
		const mask = createMask();

		/* set event handlers for section closing */
		// close when clicking outside the section (by mask)
		$(mask).on('click', () => {
			closeSearchSection(mask);
		});
		// close on click on the close button
		$('.btnCloseSearchMob').on('click', () => {
			closeSearchSection(mask);
		});

		// open search mobile
		openSearchSection();
	});

	/**
	 * view the full list
	 */
	$buttonExpandList.on('click', (e) => {
		// scroll
		makeScrollTop();

		// toggle height
		toggleHeight();
	});

	/**
	 * select a value from the list and paste into the search field
	 */
	$('.search_popular__item').on('click', (event) => {
		const input = $('.search_input');
		const text = $(event.currentTarget).children('.search_popular__text').text();
		input.val(text);
	});
};

export { search };
