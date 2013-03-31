define(function(require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Mustache = require('mustache'),
        template = require('text!templates/header/itemview.html');

    var HeaderView = Marionette.Layout.extend({
        template: Mustache.compile(template)
    });

    return HeaderView;
});
