require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'portTips'], function (app, $, portTips) {
    'use strict';
    // use app here
    // console.log(app);
    // console.log('Running jQuery %s', $().jquery);
});