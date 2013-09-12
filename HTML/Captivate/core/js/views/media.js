// Media component being built
Adapt.media = ComponentView.extend({
    tagName: "div",
    className: "component media",
    init:function(){
        this.listenToOnce(Adapt, "page:ready", this.updateRatio, this);
        this.listenTo(Adapt.Manager.model, 'change:screenSize', this.updateRatio, this);
    },
    events: {
        'inview':'inview'
    },
    inview: function (event, visible) {
        if (visible) this.model.set('complete',true);
        this.$el.off('inview');
    },
    updateRatio:function(){
        var width = $('.inner', this.el).width();
        $('.widget object', this.el).width(width).height((width/16)*9);
        $('.widget video', this.el).width(width).height((width/16)*9);
    }
});
