Adapt.text = ComponentView.extend({
    tagName: "div",
    className: "component text",
    events:{
        'inview':'inview'
    },
    inview: function (event, visible) {
        if (visible) this.model.set('complete',true);
        this.$el.off('inview');
    }
});