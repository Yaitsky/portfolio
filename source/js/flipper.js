$(document).ready (function() {
    $('.welcome-auth__link').on('click', function(e) {
        e.preventDefault();

        $('.flipper').addClass('flipper_on');
        $(this).addClass('welcome-auth__link_off');
    })

    $('.welcome-menu__link_flip').on('click', function(e) {
        e.preventDefault();

        $('.flipper').removeClass('flipper_on');
        $('.welcome-auth__link').removeClass('welcome-auth__link_off');

    })

})

