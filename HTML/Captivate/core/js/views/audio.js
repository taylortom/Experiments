var AudioView = Backbone.View.extend({
	
    initialize:function(){	
        var that = this;
		
        this.$el.prepend(Handlebars.templates['audio']);
        this.listenTo(Adapt, 'audio:started audio:stop', this.stop, this);
		
        if(Modernizr.audio) {	
            this.audio = new Audio(); 
                
            if(this.audio.canPlayType('audio/ogg')) this.audio.src = this.model.get('audio').ogg; 
                if(this.audio.canPlayType('audio/mpeg')) this.audio.src = this.model.get('audio').mp3;
                
            $(this.audio).bind('ended', that.stop);
        } else 
        if($("#audioPlayer")[0] == undefined) { // only want one player
            this.embedFlashAudioPlayer();
        }
    },
	
    events:{	
        'click .icon.play':'play',      
        'click .icon.pause':'pause'
    },
	
	embedFlashAudioPlayer:function(){
		
		var params = {
				swliveconnect: "true",
				allowscriptaccess:"always"
			};
		
		var attributes = {
			id: "audioPlayer",
			name: "audioPlayer"
		};
		
		swfobject.embedSWF("audioplayer.swf", "flashPlayer", "1", "1", "8.0.22", "express_install.swf", false, params, attributes);
	},
	
    play:function(event){
        if(event) event.preventDefault();
		
        Adapt.trigger('audio:started');
		
        try {
            if(this.audio) this.audio.play();
			else {
				$("#audioPlayer")[0].loadAudio(this.model.get('audio').mp3);	
			}
			
        } 
		catch(e) {
            //alert("audio missing from: "+ this.model.get("id"));
            console.error("audio missing from: "+ this.model.get("id"));
        }
		
        $('.icon.play', this.$el).addClass('pause').removeClass('play');
    },
	
    pause:function(event){
        if(event) event.preventDefault();
		
        try {
            if(this.audio) this.audio.pause();
			else {
				$("#audioPlayer")[0].controlAudio("pause"); 
			}
        } 
		catch(e) {
            //alert("audio missing from: "+ this.model.get("id"));
            console.error("audio missing from: "+ this.model.get("id"));
        }
		
        $('.icon.pause', this.$el).addClass('play').removeClass('pause');
    },
	
    stop:function(){
		
        try {
            if(this.audio) this.audio.pause()
            if(this.audio) this.audio.currentTime = 0;
        } 
		catch(e) {
            //alert("audio missing from: "+ this.model.get("id"));
			console.error("audio missing from: "+ this.model.get("id"));
        }
		
        $('.icon.pause', this.$el).addClass('play').removeClass('pause');
    }
});
