$(document).ready(function () {
    'use strict'

    // adjust the header height
    var myHeader = $('.header');

    var mySlider = $('.slider')
    //  set the height of the header to the window's height
    myHeader.height($(window).height())

    // height of header equals to the height of window when resizing the window   
    $(window).resize(function () {
        myHeader.height($(window).height());

        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);

        });
    });

    //   when clicking one of the li elements ..
    // add active class to this li .. remove the class from the rest li elements
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });


    // triggering the slider
    mySlider.bxSlider({
        pager: false
    });

    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);
    });

    $('.links ul li a').click(function () {
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);

    });
    // automatic slider .. created by me .. 

    // infinite slider .. in the testimonials 
    (function autoSlider() {
        $('.b-slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn()
                    autoSlider()

                });

            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.b-slider div').eq(0).addClass('active').fadeIn();

                    autoSlider()
                });
            }
        });
    }());
    // triggering the nice scroll to displayed
    $("body").niceScroll();


    // triggering the shuffle ..to work

});