$(document).ready(function() {
        $('.c-hamburger').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-active');

            if(!$('.fullscreen-menu').hasClass('fullscreen-menu_open')) {
                $('.fullscreen-menu').addClass('fullscreen-menu_open').
                    css({
                    'opacity' : 1
                })
            } else {
                $('.fullscreen-menu').removeClass('fullscreen-menu_open').
                css({
                    'opacity' : 0
                })
            }

            if (!$('.fullscreen-menu__link').hasClass('fullscreen-menu__link_active')) {
                $('.fullscreen-menu__link').addClass('fullscreen-menu__link_active');
                $('.fullscreen-menu__link').css({
                    'opacity': 1,
                    'top':0
                })
            } else {
                $('.fullscreen-menu__link').removeClass('fullscreen-menu__link_active');
                $('.fullscreen-menu__link').css({
                    'opacity': 0,
                    'top':'-10px'
                })
            }



        })
    });