
var Router = Backbone.Router.extend({
    routes: {
        "":"menu",
        ":module":"menu",
        ":module/:topic":"menu",
        ":module/:topic/:page":"page",    
        ":module/:topic/:page/:article":"page",    
        ":module/:topic/:page/:article/:block":"page" 
    },
    initialize: function () {
        //$('#guide').show();
        //Adapt.GuideView.renderAdapt();
        document.title = Adapt.Course.get('title');
    },
    menu: function(module, topic) {
        Adapt.trigger('remove');
        Adapt.CurrentModule = undefined;
        Adapt.CurrentTopic = undefined;
        Adapt.CurrentPage = undefined;
        $('#page, .block-shifter').hide();
        $('#wrapper').removeClass('content');
        if(module) {
            Adapt.CurrentModule = Adapt.Course.get('modules').findWhere({route:module}).set({visited:true});;
            if(topic) {
                Adapt.CurrentTopic = Adapt.CurrentModule.get('topics').findWhere({route:module.concat('/',topic)}).set({visited:true});;
                new PagesMenu({model: Adapt.CurrentTopic, type:'pages'});
                return;
            }
            new TopicsMenu({model: Adapt.CurrentModule, type:'topics'});
            return;
        }
        new ModulesMenu({model:Adapt.Course, type:'modules'});
    },
    page: function (module, topic, page, article, block) {
        Adapt.trigger('remove');
        Adapt.CurrentModule = Adapt.Course.get('modules').findWhere({route:module});
        Adapt.CurrentTopic = Adapt.CurrentModule.get('topics').findWhere({route:module.concat('/',topic)});
        Adapt.CurrentPage = Adapt.CurrentTopic.get('pages').findWhere({route:module.concat('/',topic,'/',page)}).set({visited:true});
        $('#wrapper').addClass('content');
        $('#menu').hide();
        $('.loading').fadeIn('fast');
        new PageView({model: Adapt.CurrentPage});
        if (article) {
            Adapt.once('page:ready', function() {
               $.scrollTo('.'+module.concat('-',topic,'-', page,'-', article,'-', block));
            });
        }
    }
});
