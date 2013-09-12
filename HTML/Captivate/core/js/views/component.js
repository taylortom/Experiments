var ComponentView = Backbone.View.extend({
    initialize: function() {
        this.model.set('ready', false);
        this.listenTo(Adapt, 'remove', this.remove);
        this.template = this.model.get('component');
        this.init();
        this.render();
    },
    render: function() {
        this.preRender();
        this.$parent.append(this.el);
        var data = this.model.toJSON();
        var template = Handlebars.templates[this.template]
        this.$el.html(template(data)).addClass(this.model.get('layout')+' '+this.model.get('class'))
        if(this.model.get("mobile-hidden")) this.$el.addClass("mobile-hidden");
        if(this.model.getBool('audio')) new AudioView({model:this.model, el:$('> .inner > .title', this.el), $parent:this.$el});
        this.setup();
        return this;
    },
    init:function(){},
    setup:function(){
        this.model.set('ready', true);
    },
    preRender: function () {}
});
