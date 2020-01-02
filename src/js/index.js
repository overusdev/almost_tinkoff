import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
    var $gamburger = $('.g_nav__top-gamburger');
    var $slideMenu = $('.g_nav__slide-menu');
    var $slideMenuClose = $('.g_nav__slide-menu-close-icon');

    $gamburger.click(function () {
        $slideMenu.addClass('g_nav__slide-menu_state_active');
    });

    $slideMenuClose.click(function () {
        $slideMenu.removeClass('g_nav__slide-menu_state_active');
    });

});
