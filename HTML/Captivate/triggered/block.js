var BlockView = BlockView.extend({
    className: 'block',
    events: {
        "click .trigger-button":"trigger"
    },
    trigger: function(event){
        event.preventDefault();         
        var index = parseInt($(event.currentTarget)
                        .attr("class")
                        .match(/[0-9]/)[0]);
        this.model.get("components").at(index).trigger("triggered:show");
    }
});
