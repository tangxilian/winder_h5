define([
    'src/main/routers/router',
    'src/main/view/stats',
], function(Workspace, Stats) {
    new Workspace();
    Backbone.history.start();
    new Stats();
});
