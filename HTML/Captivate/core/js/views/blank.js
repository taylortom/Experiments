Adapt.blank = ComponentView.extend({
    tagName: "div",
    className: "component blank",
    events:{
        'inview':'inview'
    },
    inview: function (event, visible) {
        if (visible == true) {
            this.model.set('complete',true);
            this.$el.off('inview');
        };
    }
});