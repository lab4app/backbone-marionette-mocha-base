({
    appDir: './',
    dir: './build/',
    mainConfigFile: 'build.js',
    preserveLicenseComments: true,
    baseUrl: './libs',
    name: 'main',
    paths: {
        'main': '../main',
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
})
