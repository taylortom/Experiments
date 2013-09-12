Adapt.Blacklist = ['spoor','complete','ready','guides', 'dataReady', 'child', 'type', 'route'];
Adapt.Course = new Course();
Adapt.Modules = new ModulesCollection();
Adapt.Topics = new TopicsCollection();
Adapt.Pages = new PagesCollection();
Adapt.Articles = new ArticlesCollection();
Adapt.Blocks = new BlocksCollection();
Adapt.Components = new ComponentsCollection();

//Adapt.Inbox = new MessageCollection();
//Adapt.MessageCenter = new MessagesView({collection: Adapt.Inbox});


if ( ! window.console ) console = { log: function(){}, error: function(){} }
// Added comments for testing

$(function () {
    Adapt.Manager = new ManagerView({model:new ManagerModel()});
    Adapt.Course.fetch({
        success: function(){
            Adapt.Router = new Router();
            Backbone.history.start();
            Adapt.trigger('dataReady');
            Adapt.Course.set('dataReady', true);
        }
    });
    // Remove for full version
    shortCuts();
});

/*Adapt.on('page:ready', function(attributes) {
    console.log(attributes)
});*/

function shortCuts() {
    var gate = 0;
    $(window).on('keypress', function(event){
        $('.boom').html(event.which)
        if (gate == 1) {
            if (event.ctrlKey && event.which == '32') {
                var codes = prompt("Please enter a code");
                if (codes == 'components') {
                    alert('Unlocked components');
                    _.each(Adapt.Components.models, function(model){
                        model.set('complete',true);
                    })
                }
                if (codes == "where am i") {
                    $('body').one('click', function(event){
                        var loc = $(event.target).closest('.block').attr('class');
                        loc.substring
                        alert(loc);
                    })
                }
                if (codes.indexOf('article') >= 0) {
                    var articleID = codes.replace("article ","");
                    console.log(articleID)
                    alert('unlocked article')
                    Adapt.Articles.findWhere({
                        id:articleID
                    }).set('complete',true);
                }
                if (codes.indexOf('page') >= 0) {
                    var pageID = codes.replace("page ","");
                    console.log(pageID)
                    alert('unlocked page')
                    Adapt.Pages.findWhere({
                        id:pageID
                    }).set('complete',true);
                }
                if (codes.indexOf('topic') >= 0) {
                    var topicID = codes.replace("topic ","");
                    console.log(topicID)
                    alert('unlocked topic')
                    Adapt.Topics.findWhere({
                        id:topicID
                    }).set('complete',true);
                }
                if (codes.indexOf('module') >= 0) {
                    var moduleID = codes.replace("module ","");
                    console.log(moduleID)
                    alert('unlocked module')
                    Adapt.Modules.findWhere({
                        id:moduleID
                    }).set('complete',true);
                }
                gate = 0;
            }
        }
        if (event.which == '105') gate = 1; 
        else gate = 0; return;
    })
}
