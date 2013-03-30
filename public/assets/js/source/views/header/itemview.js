define(function(require) {
    'use strict';

    var Backbone = require('backbone.all'),
        Mustache = require('mustache'),
        template = require('text!templates/header/itemview.html');

    var HeaderView = Backbone.Marionette.Layout.extend({
        template: Mustache.compile(template)
    });

    return HeaderView;
});
