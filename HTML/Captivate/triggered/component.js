var ComponentView = ComponentView.extend({
    initialize: function() {
        this.listenTo(this.model, "triggered:show", this.show, this)
        this.listenTo(this.model, "triggered:close", this.close, this)
        this.model.set('ready', false);
        this.listenTo(Adapt, 'remove', this.remove);
        this.template = this.model.get('component');
        this.init();
        this.render();
        if(this.model.get("triggered")){
            this.$el.addClass("triggered");
            var close = new CloseButton({model:this.model});
            this.$("> .inner").prepend(close.$el);
        }
    },
    show: function(){
        this.$el.css("visibility","visible");      
    },
    close: function(){          
        this.$el.css("visibility","hidden");      
    }
});
