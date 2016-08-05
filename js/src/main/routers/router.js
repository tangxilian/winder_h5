define([
    'jquery',
    'backbone',
    'src/main/collection/main',
    'common'
], function($, Backbone, Main, Common) {
    var Workspace = Backbone.Router.extend({
        routers: {
            '#filter': 'setFilter'
        },
        setFilter: function(param) {
            Common.TodoFilter = param.trim() || '';
            Main.trigger('filter');
        }

    });
    return Workspace;
});
