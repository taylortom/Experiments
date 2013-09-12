var ToolsView = Backbone.View.extend({
    el: '#tools',

    initialize: function() {
        this.render();
    },
    
    events: {
        'click .tab.resources':'toggleResources',
        'click .tab.settings':'toggleSettings', 
        'click .tab.guide':'toggleGuide'
    },
    
    render: function() {
        console.log(this.model);
        var data = this.model.toJSON();
        var template = Handlebars.templates["tools"];
        $(this.el).html(template(data));
        return this;
    },
    
    toggleResources: function(event) {
        event.preventDefault();
        this.openTool();
    },
    
    toggleSettings: function(event) {
        event.preventDefault();
        this.openTool();
    },
    
    toggleGuide: function(event) {
        event.preventDefault();
        this.openTool();
    },
    
    //temp placeholder view function -- remove when indiviual tools views are implemented
    
    openTool: function() {
        console.log('opened');
        $('#tools .body').animate({height:'300px'});
    }
    
});