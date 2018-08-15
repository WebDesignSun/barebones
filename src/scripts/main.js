$(document).ready(function(){
    $('.nav-trigger').on('click touch', function () {
        $(this).toggleClass('is-active');
        $('.main-menu').toggleClass('active');
        if($(this).hasClass('is-active')){
            $('.click_layer').addClass('visible');
        }
        else{
            $('.click_layer').removeClass('visible');
        }

        $('.click_layer').on('click touch', function(){
            $('.nav-trigger').removeClass('is-active');
            $('.main-menu').removeClass('active');
            $('.click_layer').removeClass('visible');
        });
    });


    if($(window).width() <= 768){
        $('.main-menu > ul > li > a').on('click touch', function (e) {

            let submenu = $(this).parent().find('.submenu');
            let submenu_inner = $(this).parent().find('ul');

            if(submenu_inner.hasClass('submenu-inner')){
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
        navText: ['<img src="src/images/prev.png" alt="prev">','<img src="src/images/next.png" alt="next">']
    });
    $("#before-after-carousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<img src="src/images/prev-ba.png" alt="prev">','<img src="src/images/next-ba.png" alt="next">'],
        responsive:{
            992:{
                items: 2
            },
            0:{
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

        if($(window).width() <= 768){
            $('.main-menu > ul > li > a').on('click touch', function (e) {

                let submenu = $(this).parent().find('.submenu');
                let submenu_inner = $(this).parent().find('ul');

                if(submenu_inner.hasClass('submenu-inner')){
                    e.preventDefault();
                    submenu.toggleClass('active');
                }
            });
        }
    });
});
