TutorView = Backbone.View.extend({
    el:"#tutor",
    initialize:function(){
        this.render();
        this.listenTo(Adapt.Router, "route", this.closeTutor, this);
    },
    events: {
        'click .done':'closeTutor'
    },
    render: function () {
        var data = this.model.toJSON();
        var template = Handlebars.templates["tutor"];
        this.$el.html(template(data)).show();
        $('.done', this.$el).focus();
        if(this.model.get('audio')) this.setupAudio();
        $('#navigation .tutor').show();
        $('#shadow').fadeIn('fast');
        return this;
    },
    closeTutor: function (event){
        if(event.preventDefault) event.preventDefault();
        Adapt.trigger('audio:stop');
        // temp fix to focus on first visible button 
        // to do: functionality to return focus to input which triggered tutor 
        // Return focus to widget's first visible button, else to navigation first link
        if (typeof Adapt.tabHistory !== 'undefined' && $(Adapt.tabHistory).children('a.button:visible').first().css('visibility') == "visible") {
            $(Adapt.tabHistory).children('a.button:visible').first().focus();
        }
        else {
            $('#navigation').find('a.icon:visible').first().focus();
        }
        this.$el.hide();
        $('#navigation .tutor').hide();
        $('#shadow').fadeOut('fast');
        if(this.model.get('callback')) this.model.get('callback')();
    },
    setupAudio:function(){
        Adapt.trigger('audio:stop');
        if(Modernizr.audio) this.audio = new Audio(); 
        if(this.audio && this.audio.canPlayType('audio/ogg')) this.audio.src = this.model.get('audio').ogg; 
        if(this.audio && this.audio.canPlayType('audio/mpeg')) this.audio.src = this.model.get('audio').mp3;
        if(!this.audio) this.$el.append(Handlebars.templates['flashaudio'](this.model.toJSON()));
        if(!this.audio) this.flashAudio = $("#"+this.model.get('id')+"-audio")[0]
        this.$el.prepend(Handlebars.templates['audio']);
        this.events['click .icon.play'] = 'play';
        this.events['click .icon.pause'] = 'pause';
        $('.play', this.$el).focus();
    },
    play:function(event){
        if(event) event.preventDefault();
        console.log('play');
        Adapt.trigger('audio:started');
        if(this.audio) this.audio.play();
        if(this.flashAudio) this.flashAudio.dewplay();
        $('.icon.play', this.el).addClass('pause').removeClass('play');
        this.listenTo(Adapt, 'audio:started audio:stop', this.stop, this);
    },
    pause:function(event){
        if(event) event.preventDefault();
        console.log('pause');
        if(this.audio) this.audio.pause();
        if(this.flashAudio) this.flashAudio.dewpause();
        $('.icon.pause', this.el).addClass('play').removeClass('pause');
    },
    stop:function(event){
        if(event) event.preventDefault();
        console.log('stop');
        if(this.audio) this.audio.pause()
        if(this.audio) this.audio.currentTime = 0;
        if(this.flashAudio) this.flashAudio.dewstop();
        $('.icon.pause', this.el).addClass('play').removeClass('pause');
    }
});
