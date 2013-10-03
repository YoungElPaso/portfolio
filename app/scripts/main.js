require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        yepnope: '../bower_components/yepnope/yepnope'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['jquery', 'yepnope', 'app', 'bootstrap', 'portTips'], function($, app, portTips) {
    'use strict';
    // use app here
    //console.log(app);
    // console.log('Running jQuery %s', $().jquery);
});