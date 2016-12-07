$(document).ready (function() {
    $('.blog__left_btn').on('click', function(e) {
        e.preventDefault();

        var asideMenu = $('.blog__left'),
            reqLeft = '-18.75rem';

        if (!asideMenu.hasClass('blog__left_on')) {
            asideMenu.addClass('blog__left_on');
            asideMenu.css({
                'left' : '0'
            })
        } else {
            asideMenu.removeClass('blog__left_on');
            asideMenu.css({
                'left' : reqLeft
            })
        }

    })

})