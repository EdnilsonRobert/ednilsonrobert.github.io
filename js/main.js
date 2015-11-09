(function($) {
    /**
    * COMPORTAMENTO DO MENU RESPONSIVO -----------------------------------------
    */
    $('.brand').on('click', function() {
        if( $('.toggle-menu').hasClass('button-active') ) $('.toggle-menu').toggleClass('button-inactive button-active');
        if( $('.main-menu').hasClass('visible-menu') ) $('.main-menu').toggleClass('hidden-menu visible-menu');
    });

    $('.toggle-menu').on('click', function() {
        $(this).toggleClass('button-inactive button-active');
        $('.main-menu').toggleClass('hidden-menu visible-menu');
    });

})(jQuery);

/**
* ------------------------------------------------------------------------------
* FIM DO DOCUMENTO
* ------------------------------------------------------------------------------
*/