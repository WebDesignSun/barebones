/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function () {
    $('.nav-trigger').on('click touch', function () {
        $(this).toggleClass('is-active');
        $('.main-menu').toggleClass('active');
        if ($(this).hasClass('is-active')) {
            $('.click_layer').addClass('visible');
        } else {
            $('.click_layer').removeClass('visible');
        }

        $('.click_layer').on('click touch', function () {
            $('.nav-trigger').removeClass('is-active');
            $('.main-menu').removeClass('active');
            $('.click_layer').removeClass('visible');
        });
    });

    if ($(window).width() <= 768) {
        $('.main-menu > ul > li > a').on('click touch', function (e) {

            var submenu = $(this).parent().find('.submenu');
            var submenu_inner = $(this).parent().find('ul');

            if (submenu_inner.hasClass('submenu-inner')) {
                e.preventDefault();
                submenu.toggleClass('active');
            }
        });
    }

    $("#testimonials-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<img src="src/images/prev.png" alt="prev">', '<img src="src/images/next.png" alt="next">']
    });
    $("#before-after-carousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<img src="src/images/prev-ba.png" alt="prev">', '<img src="src/images/next-ba.png" alt="next">'],
        responsive: {
            992: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $(".news-text").equalHeights();
    $(".news-title").equalHeights();
    $(".service-title").equalHeights();
    $(".service-descr").equalHeights();

    $(window).resize(function () {

        $(".news-text, .news-title, .service-title, .service-descr").removeAttr('style');
        $(".news-text").equalHeights();
        $(".news-title").equalHeights();
        $(".service-title").equalHeights();
        $(".service-descr").equalHeights();

        if ($(window).width() <= 768) {
            $('.main-menu > ul > li > a').on('click touch', function (e) {

                var submenu = $(this).parent().find('.submenu');
                var submenu_inner = $(this).parent().find('ul');

                if (submenu_inner.hasClass('submenu-inner')) {
                    e.preventDefault();
                    submenu.toggleClass('active');
                }
            });
        }
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);