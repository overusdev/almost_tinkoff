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

    $gamburger.click(function () {
        $slideMenu.addClass('g_nav__slide-menu_state_active');
    });

    $slideMenuClose.click(function () {
        $slideMenu.removeClass('g_nav__slide-menu_state_active');
    });


    $slideMenuItem.each(function (index) {
        if ($(this).hasClass('g_nav__slide-menu-item_state_active')) {
            // $(this).find('.g_nav__slide-menu-list').addClass('g_nav__slide-menu-list_state_opened');
            $(this).find('.g_nav__slide-menu-list').slideDown(100);
        } else {
            $(this).find('.g_nav__slide-menu-list').slideUp(100);
        }
        // console.log(index + ": " + $(this).text());
    });

    // if ($slideMenuItem.hasClass('g_nav__slide-menu-item_state_active')) {
    //     console.log('Has');
    //     $(this).find('.g_nav__slide-menu-list').toggleClass('g_nav__slide-menu-list_state_opened');
    // }

    $slideMenuHeader.click(function () {

        // $('.g_nav__slide-menu-list').not($(this).next()).removeClass('g_nav__slide-menu-list_state_opened');
        // $(this).siblings('.g_nav__slide-menu-list').toggleClass('g_nav__slide-menu-list_state_opened');
        // $(this).find('.g_nav__slide-menu-item-arrow').toggleClass('g_nav__slide-menu-item-arrow_state_active');
        $('.g_nav__slide-menu-list').not($(this).next()).slideUp(400);
        $(this).siblings('.g_nav__slide-menu-list').slideToggle(400);
        $(this).find('.g_nav__slide-menu-item-arrow').toggleClass('g_nav__slide-menu-item-arrow_state_active');
    });

    // .not($(this).next()).slideUp(1000);

});
