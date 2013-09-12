//////////////////////////
//////////////////////////
// MODEL MAGIC ///////////
//////////////////////////
//////////////////////////

var ManagerModel = Backbone.Model.extend({
    initialize: function () {
    },
    defaults: {
        device:'desktop',
        screenSize:900,
        touch:false,
        accessibility:false,
        fontSize:'13px',
        contrast:false,
        transcripts:false,
        langauge:'english',
        rtl:false,
        liteVersion:false,
        notify:'always',
        notifyPosition:'top',
        isOpen:false,
        componentLoaded:0
    }
});

var GuideModel = Backbone.Model.extend({
    initialize: function () {
    }
});

var BlockShifter = Backbone.Model.extend({
    initialize: function () {
    }
});

var GenericModel = Backbone.Model.extend({
    initialize: function () {
    }
});

var TutorModel = Backbone.Model.extend({
    initialize: function () {
        Adapt.Feedback = new TutorView({model:this});
    }
})

var Message = Backbone.Model.extend({
    initialize: function() {
    },
    defaults:{
        sent: false,
        read: false,
        star: false
    }
});

var ContentModel = Backbone.Model.extend({
    initialize:function () {
        this.init();
        if (this.get('id')) this.set('route', this.get('id').replace(/-/g,'/'));
        if (this.get("mobile-hidden")) this.setOnChildren("mobile-hidden", true); 
    },
    completeCheck:function() {
        if(this.get("complete") || this.attributes[this.get('child')].findWhere({complete:false, spoor:true}))
           return;
        this.set('complete', true);
        Adapt.trigger('itemComplete',{type: this.get('type'), id: this.get('id')});
    },
    readyCheck:function() {
        if(this.attributes[this.get('child')].findWhere({ready:false}))
            return;
        this.set('ready', true); 
    },
    getBool:function(attr){
      var attr = this.get(attr);        
      if(_.isEmpty(attr)) return false;
      if(attr instanceof Object){
        for(prop in attr){
          if(!_.isEmpty(attr[prop])) return true;
        }   
      } else
      if(attr instanceof Array){
        for(i = 0, j = attr.length; i < j; i++){
          if(!_.isEmpty(attr[i])) return true;
        }
      }
      return false;
    },
    toJSON:function(blacklist) {
        if(this.get('type') == 'page') blacklist = Adapt.Blacklist.splice(-1,1);
        var response = _.clone(this.attributes);
        if(this.get('child'))
            response[this.get('child')] = response[this.get('child')].toJSON(blacklist);
        if(this.get('guide')) {
            response['guide'] = {items:this.get('guides').toJSON()}
        }
        if(!blacklist) return response;
        return _.omit(response, blacklist);
    },
    toSpecifiedJSON:function(whitelist){
        var response = _.clone(this.attributes);
        return _.pick(response, whitelist);
    },
    setOnChildren:function(key, val){
        var attrs;
        if(!_.isObject(key)) (attrs = {})[key] = val;
        else attrs = key;
        this.set(attrs);
        if(this.get('child'))
            this.attributes[this.get('child')].setOnChildren(attrs);
    },
    getChildren:function(type){
        var delveDeep = function (mod, res) {
                    if(mod.get('child')==type) _.each(mod.attributes[mod.get('child')].models, function(mod){res.push(mod)});
                    else delveDeep(mod);
            },
            response = _.reduce(this.attributes[this.get('child')].models, function(res, mod) {
                delveDeep(mod, res);
                return res;
            },[])
        return response;
    },
    getParent:function(type){
        var id = this.get('id').split('-'), 
            index = id.join("").match(/[a-z]/g).indexOf(type.charAt(0)) + 1,
            type = type.charAt(0).toUpperCase() + type.slice(1) + 's';
        id.splice(index, id.length - index); 
        id = id.join('-');
        return Adapt[type].findWhere({id:id});      
    },
    populateFromSpecifiedJSON: function(jsonData, specification){
        for(var i = 0; i < specification.length; i++){
            this.set(specification[i], jsonData[specification[i]]);
        }
        if(jsonData.children !== undefined) {
            var models = this.attributes[this.get('child')].models;
            for (var j = 0; j < jsonData.children.length; j++) {
                models[j].populateFromSpecifiedJSON(jsonData.children[j], specification);
            }
        }
    },
    defaults: {
        complete: false,
        spoor: true,
        ready: false
    },
    listenToCollection: function() {
       this.attributes[this.get('child')].on('modelCompleted', this.completeCheck, this)
       this.attributes[this.get('child')].on('modelReady', this.readyCheck, this)
    }
});

var Course = ContentModel.extend({
    init: function () {
        this.set('child', 'modules');
        this.set('type', 'course');
    },
    url:'course/course.json',
    setup: function () {
        this.set('modules', new ModulesCollection(this.get('modules')));
        this.set('guides', new Guides(this.get('guide').items));
        this.set('guide', new GuideModel(this.get('guide').buttons));
        this.set('guide', new GuidesView({collection: this.get('guides'), model: this.get('guide')}));
        Adapt.NavView = new NavView({model:new GenericModel(this.get('navigation'))});
        Adapt.ToolsView = new ToolsView({model:new GenericModel(this.get('navigation'))});
        this.listenToCollection();
    }
});

var Module = ContentModel.extend({
    init: function() {
        this.set('child', 'topics');
        this.set('type', 'module');
        this.set('topics', new TopicsCollection(this.get('topics')));
        Adapt.Modules.add(this);
        this.listenToCollection();
    }
});

var Topic = ContentModel.extend({
    init: function() {
        this.set('child', 'pages');
        this.set('type', 'topic');
        this.set('pages', new PagesCollection(this.get('pages')));
        Adapt.Topics.add(this);
        this.listenToCollection();
    }
});

var Page = ContentModel.extend({
    init: function() {
        this.set('child', 'articles');
        this.set('type', 'page');
        this.set('articles', new ArticlesCollection(this.get('articles')));
        Adapt.Pages.add(this);
        this.listenToCollection();
    }
});

var Article = ContentModel.extend({
    init: function() {
        this.set('child', 'blocks');
        this.set('type', 'article');
        this.set('blocks', new BlocksCollection(this.get('blocks')));
        Adapt.Articles.add(this);
        this.setOnChildren('assessment', this.get('assessment'));
        this.listenToCollection();
    }
});

var Block = ContentModel.extend({
    init: function() {
        this.set('child', 'components');
        this.set('type', 'block');
        this.set('components', new ComponentsCollection(this.get('components')));
        Adapt.Blocks.add(this);
        this.listenToCollection();
        this.completeCheck();
    }
});

var Component = ContentModel.extend({
    init: function () {
        this.set('child', false);
        this.set('type', 'component');
        Adapt.Components.add(this);
    }
});
