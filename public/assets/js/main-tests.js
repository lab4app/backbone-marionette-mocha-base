(function(requirejs) {
    'use strict';

    requirejs.config({
        baseUrl: '../',
        paths: {
            'application': 'source/application',
            'routers': 'source/routers',
            'templates': 'source/templates',
            'views': 'source/views',
            'models': 'source/models',
            'collections': 'source/collections',
            'backbone': 'libs/backbone',
            'backbone.marionette': 'libs/backbone.marionette',
            'mustache': 'libs/mustache',
            'text': 'libs/text',
            'jquery': 'libs/jquery',
            'underscore': 'libs/underscore',
            'chai': 'tests/libs/chai/chai'
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
    });
})(requirejs);
