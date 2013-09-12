Adapt.accordion = ComponentView.extend({
    tagName: "div",
    className: "component accordion",
    events: {
        'click .item .title':'toggleItem'
    },
    toggleItem: function (event) {
        event.preventDefault();
        $('.item .body', this.$el).stop(true,true).slideUp();
        if (!$(event.currentTarget).hasClass('selected')) {
            $('.item .title', this.$el).removeClass('selected');
            $(event.currentTarget).addClass('selected visited').siblings('.body').slideToggle();
            $('.icon', this.$el).removeClass('minus').addClass('plus');
            $('.icon', event.currentTarget).removeClass('plus').addClass('minus');
        } else {
            $('.item .title', this.$el).removeClass('selected');
            $(event.currentTarget).removeClass('selected');
            $('.icon', event.currentTarget).removeClass('minus').addClass('plus');
        }
        if ($('.item .visited', this.$el).length==$('.item', this.$el).length && this.model.get('complete')==false) {
            this.model.set('complete',true);
        }
    }
});