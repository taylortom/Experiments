Adapt.graphic = ComponentView.extend({
    tagName: "div",
    className: "component graphic",
    events: {
        'inview':'inview'
    },
    setup: function () {
        var that = this;
        $('.widget', this.el).imageready(function(){
            that.model.set('ready', true);
        })
    },
    inview: function (event, visible) {
        if (visible) this.model.set('complete',true);
        this.$el.off('inview');
    }
});
