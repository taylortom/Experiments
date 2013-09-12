var BlockView = ContentView.extend({
    tagName: 'div',
    className: 'block',
    addChildren: function() {
        var $inner = this.$el.children('.inner');
        _.each(this.model.get('components').models, function (model){
            if(model.get('component') === 'hotgraphic' && $(window).width() < 699){
                return new Adapt.narrative({model:model, $parent:$inner});
            }
            new Adapt[model.get('component')]({model:model, $parent:$inner});
        });
    }
});
