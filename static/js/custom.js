/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : RYAN
Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - mital_04
========================================================================*/

(function ($) {
	'use strict';
	var RYAN = {};

	/*--------------------
      * Pre Load
    ----------------------*/
	RYAN.WebLoad = function () {
		document.getElementById('loading').style.display = 'none';
	};

	/*--------------------
        * Header Class
    ----------------------*/
	RYAN.HeaderSticky = function () {
		$('.navbar-toggler').on('click', function (a) {
			a.preventDefault(), $('.navbar').addClass('fixed-header');
		});
	};

	/*--------------------
        * Menu Close
    ----------------------*/
	RYAN.MenuClose = function () {
		$('.navbar-nav .nav-link').on('click', function () {
			var toggle = $('.navbar-toggler').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});
	};

	/*--------------------
        * Smooth Scroll
    ----------------------*/
	RYAN.HeaderScroll = function () {
		$('a[href*="#"]:not([href="#"])').on('click', function () {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') ||
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 65,
						},
						1000
					);
					return false;
				}
			}
		});
	};

	/*--------------------
        * Header Fixed
    ----------------------*/
	RYAN.HeaderFixed = function () {
		if ($(window).scrollTop() >= 60) {
			$('.navbar').addClass('fixed-header');
		} else {
			$('.navbar').removeClass('fixed-header');
		}
	};

	/*--------------------
        * Progress Bar 
    ----------------------*/
	RYAN.ProgressBar = function () {
		$('.progress .progress-bar').each(function () {
			var bottom_object = $(this).offset().top + $(this).outerHeight();
			var bottom_window = $(window).scrollTop() + $(window).height();
			var progressWidth = $(this).attr('aria-valuenow') + '%';
			if (bottom_window > bottom_object) {
				$(this).css({
					width: progressWidth,
				});
			}
		});
	};

	/*----------- Landing -----------*/

	/* Animated heading text */
	(function () {
		// Set animation timing
		var animationDelay = 2500,
			// Clip effect
			revealDuration = 660,
			revealAnimationDelay = 1500;

		initHeadline();

		function initHeadline() {
			// Initialise headline animation
			animateHeadline($('.cd-headline'));
		}

		function animateHeadline($headlines) {
			var duration = animationDelay;
			$headlines.each(function () {
				var headline = $(this);
				if (headline.hasClass('clip')) {
					var spanWrapper = headline.find('.cd-words-wrapper'),
						newWidth = spanWrapper.width() + 10;
					spanWrapper.css('width', newWidth);
				}

				//trigger animation
				setTimeout(function () {
					hideWord(headline.find('.is-visible').eq(0));
				}, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);

			if ($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate(
					{
						width: '2px',
					},
					revealDuration,
					function () {
						switchWord($word, nextWord);
						showWord(nextWord);
					}
				);
			}
		}

		function showWord($word, $duration) {
			if ($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate(
					{
						width: $word.width() + 10,
					},
					revealDuration,
					function () {
						setTimeout(function () {
							hideWord($word);
						}, revealAnimationDelay);
					}
				);
			}
		}

		function takeNext($word) {
			return !$word.is(':last-child')
				? $word.next()
				: $word.parent().children().eq(0);
		}

		function takePrev($word) {
			return !$word.is(':first-child')
				? $word.prev()
				: $word.parent().children().last();
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}
	})();

	/*--------------------
    * Counter JS
    ----------------------*/
	var a = 0;
	RYAN.Counter = function () {
		var oTop = $('.counter-box').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				$(this)
					.prop('Counter', 0)
					.animate(
						{
							Counter: $(this).text(),
						},
						{
							duration: 4000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							},
						}
					);
			});
			a = 1;
		}
	};

	/*--------------------
    * Isotope
    ----------------------*/
	RYAN.MasoNry = function () {
		var portfolioWork = $('.portfolio_content');
		$(portfolioWork).isotope({
			resizable: false,
			itemSelector: '.portfolio-item',
			layoutMode: 'masonry',
			filter: '*',
		});
		//Filtering items on portfolio.html
		var portfolioFilter = $('.filter li');
		// filter items on button click
		$(portfolioFilter).on('click', function () {
			var filterValue = $(this).attr('data-filter');
			portfolioWork.isotope({ filter: filterValue });
		});
		//Add/remove class on filter list
		$(portfolioFilter).on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
	};

	/*--------------------
    * owl Slider
    ----------------------*/
	RYAN.BlogSlider = function () {
		var testimonials_slider = $('#blog-slider-single');
		testimonials_slider.owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				991: {
					items: 3,
				},
				1140: {
					items: 3,
				},
			},
		});
	};

	RYAN.ClientSlider = function () {
		var testimonials_slider = $('#client-slider-single');
		testimonials_slider.owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				768: {
					items: 2,
				},
				991: {
					items: 3,
				},
				1140: {
					items: 3,
				},
			},
		});
	};

	RYAN.PopupVideo = function () {
		$('.popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
	};

	RYAN.LightboxGallery = function () {
		$('.portfolio-content').magnificPopup({
			delegate: '.lightbox-gallery',
			type: 'image',
			tLoading: '#%curr%',
			mainClass: 'mfp-fade',
			fixedContentPos: true,
			closeBtnInside: true,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			},
		});
	};

	// Window on Load
	$(window).on('load', function () {
		RYAN.WebLoad();
	});

	$(document).on('ready', function () {
		RYAN.MasoNry(),
			RYAN.ClientSlider(),
			RYAN.MenuClose(),
			RYAN.BlogSlider(),
			RYAN.Counter(),
			RYAN.ProgressBar(),
			RYAN.HeaderScroll(),
			RYAN.PopupVideo(),
			RYAN.LightboxGallery(),
			RYAN.HeaderSticky();
	});

	$(window).on('scroll', function () {
		RYAN.Counter(), RYAN.ProgressBar(), RYAN.HeaderFixed();
	});
})(jQuery);
