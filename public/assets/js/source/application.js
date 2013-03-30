define(function(require) {
    'use strict';

    var Backbone = require('backbone.all'),
        MasterRouter = require('routers/master');

    var application = new Backbone.Marionette.Application();

    application.globals = {};

    application.addInitializer(function(options) {
        // Prevent internal links from causing a page refresh.
        $(document).on('click', 'a', function(event) {
            var fragment = Backbone.history.getFragment($(this).attr('href'));
            var matched = _.any(Backbone.history.handlers, function(handler) {
                return handler.route.test(fragment);
            });
            if (matched) {
                event.preventDefault();
                Backbone.history.navigate(fragment, { trigger: true });
            }
        });

        // Set Mustache as the default template rendering engine.
        Marionette.Renderer.render = function(template, data) {
            return template(data);
        };

        application.addRegions({
            header: 'header',
            footer: 'footer',
            content: '#content'
        });

        new MasterRouter({ application: this });
        if (!Backbone.history.started) {
            Backbone.history.start({ pushState: false });
        }
    });

    return application;
});
