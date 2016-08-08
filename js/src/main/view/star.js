define([
    'jquery',
    'underscore',
    'backbone',
    'src/main/collection/main',
    'src/main/view/main',
    'text!src/main/template/star.html',
],function ($, _, backbone,Todos, TodoView, starTemplate) {
    var babyView =  Backbone.View.extend({
        el:'#page-index',
        template:_.template(starTemplate),
        events:{
            'click #star_item': 'starItem',
        },
        initialize:function () {
            this.$el.html(this.template())
        },
        starItem:function () {
            alert("44444444444444444444");
        }

    });
    return babyView;

});