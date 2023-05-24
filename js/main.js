$(function () {
    $('.slick_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.screen_slidder').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.feedback_text_slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.feedback_img_slick',
        //autoplay: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.feedback_img_slick').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        asNavFor: '.feedback_text_slick',
        //autoplay: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $('.all_team_slick_slidder').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    //Scroll bar

    $(".top_scroll").click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= 450) {
            $(".top_scroll").fadeIn();
        } else {
            $(".top_scroll").fadeOut();
        }
    });

    //sticky
    var $dis = $('.full_nav').offset().top;

    var $menu = $('.full_nav')


    $(window).scroll(function () {

        var $scroll = $(this).scrollTop();

        if ($scroll >= $dis) {
            $menu.addClass('sticky');
        } else {
            $menu.removeClass('sticky');
        }
    })


    $('.vedio_icon').venobox();
});