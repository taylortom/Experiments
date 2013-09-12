var ModulesMenu = TopicsMenu = PagesMenu = Backbone.View.extend({
    className : "inner",
    initialize: function () {
        this.model.set('ready', false);
        this.render();
        this.listenTo(Adapt, 'remove', this.remove);
    },
    render : function () {
        var data = this.model.toJSON();
        var template = Handlebars.templates[this.type];
        this.$el.html(template(data)).appendTo('#menu');
        $("#menu").show();
        $('body').scrollTop(0);
        return this;
    }
});