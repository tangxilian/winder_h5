define([
    'src/main/routers/router',
    'src/main/view/baby',
], function(Workspace, BabyView) {
    new Workspace();
    Backbone.history.start();
    new BabyView();
});
