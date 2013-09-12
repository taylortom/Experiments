var PageView = ContentView.extend({
    el:'#page',
    init: function () {
        this.listenTo(this.model, 'change:ready', this.ready, this);
        this.$el.removeClass().show().css('opacity',0);
    },
    setup : function () {
        if(this.model.get('msg'))
            this.model.get('msg').set('sent', true);
    },
    addChildren: function () {
        var that = this;
        _.each(this.model.get('articles').models, function (model){
            new ArticleView({model:model, $parent:that.$el.children()});
        });
    },
    ready: function() {
        if(this.model.get('ready')) {
            $('.loading').hide();
            $(window).scroll();
            Adapt.Manager.model.trigger('change:screenSize');
            Adapt.trigger('page:ready', this.id);
            this.$el.animate({'opacity':1}, 1000);
        }
    },
    remove: function(){
        this.stopListening();
    }
});