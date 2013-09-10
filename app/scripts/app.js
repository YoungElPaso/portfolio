/*global define */
define([], function() {
    'use strict';

    Modernizr.addTest('is_mobile', function() {
        var t1 = Modernizr.touch;
        var t2 = Modernizr.mq('only all and (max-width: 480px)');
        if (t1 == false && t2 == false) {
            return false;
        } else {
            return true;
        }
    })

    /**
     * Use yepnope to test touch / resolution and load extra styles.
     */
    yepnope({
        test: Modernizr.is_mobile,
        nope: {
            'desktopExtras': 'styles/desktop.css'
        },
        callback: function(url, result, key) {
            $('body').addClass('desktop');
        }
    });
});