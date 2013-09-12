var ContentView = Backbone.View.extend({
    initialize: function () {
        this.model.set('ready', false);
        this.listenTo(Adapt, 'remove', this.remove);
        this.init();
        this.render();
    },
    render : function () {
        if(this.$parent) this.$parent.append(this.el);
        var data = this.model.toJSON();
        var template = Handlebars.templates[this.model.get('child')];
        this.$el.html(template(data)).addClass(this.model.get('id'));
        if(this.model.get("class")) this.$el.addClass(this.model.get("class"));
        if(this.model.get("mobile-hidden")) this.$el.addClass("mobile-hidden");
        this.addChildren();
        this.setup();
        return this;
    },
    init:function(){},
    setup:function(){}
});
