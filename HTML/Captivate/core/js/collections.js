var ContentCollection = Backbone.Collection.extend({
    initialize: function () {
        this.on('change:complete', this.modelCompleted, this);
        this.on('change:ready', this.modelReady, this);
        this.init();
    },
    comparator: function(model) {
        return model.get("id");
    },
    modelCompleted: function(){
        this.trigger('modelCompleted');
    },
    modelReady: function() {
        this.trigger('modelReady');
    },
    setOnChildren:function(key, val){
        var attrs;
        if(!_.isObject(key)) (attrs = {})[key] = val;
        else attrs = key;
        _.each(this.models, function(model){
            model.setOnChildren(attrs);
        })
    },
    init:function(){}
});
var ModulesCollection = ContentCollection.extend({
    model: Module
});

var TopicsCollection = ContentCollection.extend({
    model: Topic
});

var PagesCollection = ContentCollection.extend({
    model: Page
});

var ArticlesCollection = ContentCollection.extend({
    model: Article
});

var BlocksCollection = ContentCollection.extend({
    model: Block
});

var ComponentsCollection = ContentCollection.extend({
    model: Component
});

var Guides = Backbone.Collection.extend({
    model: GuideModel,
    initialize: function () {
    }
});

var MessageCollection = Backbone.Collection.extend({
    model: Message,
    sent: function() {
        return _.filter(this.models, function(model){ return model.get("sent") == true; });
    },
    unreadCheck: function(page) {
        return _.find(this.unread(), {page: page})
    }
});
