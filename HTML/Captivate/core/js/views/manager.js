ManagerView = Backbone.View.extend({
    el:'#settings',
    initialize: function() {
        var that = this;
        this.state = 'naturalClose';
        this.checkDevice();
        this.checkUserAgent();
        this.checkTouch();
        this.model.set('screenSize', $(window).width())
        this.model.on('change:screenSize', this.checkDevice, this);
        $(window).resize(function(){
            that.model.set('screenSize', $(window).width());
        });
    },
    events: {
        'click .accessibility':'toggleAccessibility'
    },
    
    checkDevice: function(){
        if ($(window).width()<=439) {
            this.model.set('device','mobile');
        } else if (($(window).width()>440)&&($(window).width()<=699)) {
            this.model.set('device','small');
        } else if ($(window).width()>=700&&($(window).width()<=899)) {
            this.model.set('device','medium');
        } else  if ($(window).width()>=900){
            this.model.set('device','large');
        }
    },
    checkUserAgent: function() {
        var uagent = navigator.userAgent.toLowerCase();
        var uagents = ['ipad','iphone','windows phone','ios','android','chrome','msie','firefox','iemobile','safari'];
        for(i=0;i<uagents.length;i++) {
            if(uagent.match(uagents[i])) {
                if(uagents[i] == 'chrome') {
                    $('html').addClass('chrome');
                    return;
                } else {
                    $('html').addClass(uagents[i]);
                }
            }    
        }   
    },
    
    checkTouch: function () {
        if(Modernizr.touch) {
            this.model.set('touch',true);
        }
    },
    
    toggleAccessibility: function (event) {
        event.preventDefault();
        this.model.set('accessibility', this.model.get('accessibility') == false ? true : false);
        $('html').toggleClass('accessibility');
    }
})