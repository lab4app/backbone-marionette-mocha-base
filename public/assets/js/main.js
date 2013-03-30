(function(requirejs) {
    'use strict';

    requirejs.config({
        baseUrl: 'assets/js/libs',
        paths: {
            'application': '../source/application',
            'routers': '../source/routers',
            'templates': '../source/templates',
            'views': '../source/views',
            'models': '../source/models',
            'collections': '../source/collections'
        },
        shim: {
            'mustache': { exports: 'Mustache' },
            'jquery': { exports: 'jQuery' },
            'underscore': { exports: '_' },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'backbone.marionette': {
                deps: ['backbone']
            },
            'backbone.all': {
                deps: ['backbone', 'backbone.marionette']
            }
        }
    });

    requirejs(['application'], function(application) {
        window.application = application;
        application.start();
    });
})(requirejs);
