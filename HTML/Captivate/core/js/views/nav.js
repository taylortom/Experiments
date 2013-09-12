var NavView = Backbone.View.extend({
    el: '#navigation',

    initialize: function() {
        this.render();
    },
    
    render: function() {
        console.log(this.model);
        var data = this.model.toJSON();
        var template = Handlebars.templates["nav"];
        $(this.el).html(template(data));
        return this;
    },
    
    events: {
        'click .tools':'toggleTools',
        'click .menu':'goBack',
        'click .tutor':'toggleTutor'
    },
    
    toggleTools: function(event) {
        event.preventDefault();
        if(!this.model.get('isOpen')){
            this.model.set('isOpen', true);
            this.showTools();
            
        } else 
        if(this.model.get('isOpen')){
            this.model.set('isOpen', false);
            this.hideTools();
        }
        $('#tools .search input[type="text"]').focus();
    },
    
    showTools: function() {
        $('#tools').show().stop().animate({'top':'40px'},400);
    },
    
    hideTools: function() {
        $('#tools').animate({'top':-$('#tools').height()},400, function () {
            $(this).hide();
        });
    },
    
    goBack: function(event) {
        event.preventDefault();
        Adapt.trigger('audio:stop');
        var currentRoute = Backbone.history.fragment.split('/');
        currentRoute.splice(-1, 1);
        var newRoute = currentRoute.join('/');
        Adapt.Router.navigate('/'+newRoute, {trigger:true});
    },
    
    toggleTutor: function(event){
        event.preventDefault();
        if(Adapt.Tutor)
            Adapt.Tutor.closeTutor();
    }
});