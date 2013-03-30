define(function(require) {
    'use strict';

    var Backbone = require('backbone.all'),
        Mustache = require('mustache'),
        template = require('text!templates/footer/itemview.html');

    var FooterView = Backbone.Marionette.Layout.extend({
        template: Mustache.compile(template),
        className: 'bottombar'
    });

    return FooterView;
});
