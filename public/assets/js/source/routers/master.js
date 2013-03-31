define(function(require) {
    'use strict';

    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone.marionette');

    var MasterRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome'
        },
        application: null,

        initialize: function(options) {
            this.application = options.application;
        },

        showHome: function() {
        }
    });

    return MasterRouter;
});
