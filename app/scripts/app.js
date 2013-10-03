/*global define */
define([], function() {
    'use strict';

    Modernizr.addTest('is_mobile', function() {
        var t1 = Modernizr.touch;
        var t2 = Modernizr.mq('only all and (max-width: 480px)');
        if (t1 == true || t2 == true) {
            return true;
        } else {
            return false;
        }
    })

    /**
     * Use yepnope to test touch / resolution and load extra styles.
     */
    yepnope({
        test: Modernizr.is_mobile,
        yep: {
            'mobileOnly': 'styles/mobile-only.css'
        },
        nope: {
            'desktopExtras': 'styles/desktop.css'
        },
        callback: function(url, result, key) {
            switch (key) {
                case 'mobileOnly':
                    $('body').addClass('mobile');
                    break;
                case 'desktopExtras':
                    $('body').addClass('desktop');
                    break;
            };
        }
    });
});