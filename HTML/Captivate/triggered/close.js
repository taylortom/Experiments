var CloseButton = Backbone.View.extend({
    tagName: "a",
    className: "done triggered-done",
    initialize: function(){
        this.render(); 
    },
    render: function(){
        this.$el.html("<div class='icon close'></div>") 
    },
    events: {
        "click":"close"
    },
    close: function(event){
        event.preventDefault();
        this.model.trigger("triggered:close");       
    }
})
