import $ from 'jquery';

window.$ = window.jQuery = $;

$(document).ready(function() {

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

    $(".faq-item").on("click", function(){
        let $this = $(this);
        $this.toggleClass('active');
        $this.find('.faq-answer').slideToggle();
    });

    $(".news-text").equalHeights();
    $(".news-title").equalHeights();
    $(".service-content").equalHeights();
    $(".team-card .worker-name").equalHeights();
    $(".team-card .worker-descript").equalHeights();

    $(window).resize(function () {

        $(".news-text, .news-title, .service-content,.team-card .worker-name,.team-card .worker-descript").removeAttr('style');
        $(".news-text").equalHeights();
        $(".news-title").equalHeights();
        $(".service-content").equalHeights();
        $(".team-card .worker-name").equalHeights();
        $(".team-card .worker-descript").equalHeights();

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

//equal heights function
!function (a) {
    a.fn.equalHeights = function () {
        let b = 0, c = a(this);
        return c.each(function () {
            let c = a(this).innerHeight();
            c > b && (b = c)
        }), c.css("height", b)
    }, a("[data-equal]").each(function () {
        let b = a(this), c = b.data("equal");
        b.find(c).equalHeights()
    })
}(jQuery);
