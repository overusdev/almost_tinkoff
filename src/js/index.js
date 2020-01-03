import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
    var $gamburger = $('.g_nav__top-gamburger');
    var $slideMenu = $('.g_nav__slide-menu');
    var $slideMenuClose = $('.g_nav__slide-menu-close-icon');
    var $slideMenuItem = $('.g_nav__slide-menu-item');
    var $slideMenuList = $('.g_nav__slide-menu-list');
    var $slideMenuHeader = $('.g_nav__slide-menu-item-header');
    var $rightblock = $('.g_nav__top-right');

    $gamburger.click(function () {
        $slideMenu.addClass('g_nav__slide-menu_state_active');
        $('.g_nav__top-left-dark-bg').addClass('g_nav__top-left-dark-bg_state_bg');
    });

    // $('.g_nav__top-right').hover(
    //     function () {
    //         $('.g_nav__top-right-popup').fadeIn(150);
    //     },
    //     function () {
    //         $('.g_nav__top-right-popup').fadeOut(10);
    //     }
    // );

    $(document).mouseup(function (e) {
        if ($('.g_nav__top-right-popup').has(e.target).length === 0) {
            $('.g_nav__top-right-popup').removeClass('g_nav__top-right-popup_state_active');
        }
    });

    $rightblock.click(function (e) {
        $('.g_nav__top-right-popup').addClass('g_nav__top-right-popup_state_active');
    });

    $slideMenuClose.click(function () {
        $slideMenu.removeClass('g_nav__slide-menu_state_active');
        $('.g_nav__top-left-dark-bg').removeClass('g_nav__top-left-dark-bg_state_bg');
    });


    $slideMenuItem.each(function (index) {
        if ($(this).hasClass('g_nav__slide-menu-item_state_active')) {
            $(this).find('.g_nav__slide-menu-list').slideDown(100);
        } else {
            $(this).find('.g_nav__slide-menu-list').slideUp(100);
        }
    });

    $slideMenuHeader.click(function () {
        $('.g_nav__slide-menu-list').not($(this).next()).slideUp(100);
        $(this).siblings('.g_nav__slide-menu-list').slideToggle(100);
        $(this).find('.g_nav__slide-menu-item-arrow').toggleClass('g_nav__slide-menu-item-arrow_state_active');
    });
});
