(function() {

	'use strict';
	
	// breakpoint where swiper will be destroyed
	// and switches to a dual-column layout
	const breakpoint = window.matchMedia( '(min-width:991px)' );
	
	// keep track of swiper instances to destroy later
	let mySwiper;
	
	//////////////////////////////////////////////////////////////////
	
	const breakpointChecker = function() {
	
	  // if larger viewport and multi-row layout needed
	  if ( breakpoint.matches === true ) {
	
		// clean up old instances and inline styles when available
		if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
	
		// or/and do nothing
		return;
	
		// else if a small viewport and single column layout needed
		} else if ( breakpoint.matches === false ) {
	
		  // fire small viewport version of swiper
		  return enableSwiper();
		}
	};
	 
	//////////////////////////////////////////////////////////////////
	
	const enableSwiper = function() {
	
	  mySwiper = new Swiper ('.c_ourcomp_director_chief', {
		slidesPerView: 1.1,
		centeredSlides: true,
		spaceBetween: 0,
		observer: true,
		observeParents: true,

		// pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			576: {
				slidesPerView: 2.25,
				centeredSlides: false,
			},
			767: {
				slidesPerView: 3.25,
				centeredSlides: false,
			},
		}
	});
	};
	
	//////////////////////////////////////////////////////////////////
	
	// keep an eye on viewport size changes
	breakpoint.addListener(breakpointChecker);
	
	// kickstart
	breakpointChecker();
	
	})();