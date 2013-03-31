define(function(require) {
    'use strict';

    var Backbone = require('backbone.marionette'),
        Mustache = require('mustache'),
        template = require('text!templates/footer/itemview.html'),
        $ = require('jquery');

    var FooterView = Backbone.Marionette.Layout.extend({
        template: Mustache.compile(template),
        className: 'bottombar',
        events: {
            'click .nav__item a': '_onNavItemClick'
        },

        _onNavItemClick: function(event) {
            var parent = $(event.currentTarget).parents('.nav__item');
            parent.siblings('.is-selected').removeClass('is-selected').end().addClass('is-selected');
        }
    });

    return FooterView;
});
