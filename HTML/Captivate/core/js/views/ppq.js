Adapt.ppq = ComponentView.extend({
    tagName: "div",
    className: "component ppq clearfix",
    init: function () {
        if(!this.model.get("originalPositions")) this.model.set("originalPositions", []);
        if(_.isString(this.model.get('feedback').partly)) 
            this.model.get('feedback').partly = [this.model.get('feedback').partly, this.model.get('feedback').partly] 
        if(_.isString(this.model.get('feedback').incorrect)) 
            this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
    },
    events: function () {
        return Adapt.Manager.model.get('touch')==false ? {
            'click .pinboard .inner img':'imageClicked',
            'mousedown .pinboard .inner .marker.in-use':'markerClicked',
            'click .submit':'submit',
            'click .reset':'reset',
            'click .button.model':'modelAnswer',
            'click .button.mine':'myAnswer'
            
        }:{
            'click .pinboard .inner img':'imageClicked',
            'touchstart .pinboard .inner .marker.in-use':'markerTouched',
            'click .submit':'submit',
            'click .reset':'reset',
            'click .button.model':'modelAnswer',
            'click .button.mine':'myAnswer'
        }
    },
    setup: function () {
        var that = this;
        console.log('setup');
        if(this.model.get('complete') == true){
            console.log('here');
            $('.button.submit', this.el).css('display','none');
            this.markItems();
            this.myAnswer(event);
        }
        $('.widget', this.$el).imageready(function(){
            that.model.set('ready', true);
        })
    },
    imageClicked:function(event) {
        this.model.set('selected', this.model.get('selected') + 1)
        var offset = $('.pinboard', this.el).offset();
        var relX = event.pageX - offset.left;
        var relY = $('.pinboard img', this.el).height() - (event.pageY - offset.top);
        $('.pinboard .marker:not(.in-use):first', this.el).css({
            bottom:relY+'px',
            left:(relX)+'px'
        }).addClass('in-use');  
    },
    markerClicked:function(event){
        if(this.model.get('submitted') || this.model.get('complete')) return;
        var $marker = $(event.currentTarget);
        $(document).on('mousemove', function(event){
            var pointSize = parseInt($('.pinboard .marker', this.el).css('font-size'),10)
            var offset = $('.pinboard', this.el).offset();
            var width = $('.pinboard img', this.el).width();
            var height = $('.pinboard img', this.el).height();
            var relX = event.pageX - offset.left;
            var relY = height - (event.pageY - offset.top);
            $marker.css({
                bottom:(Math.max(Math.min((relY),height-pointSize),0)+'px'),
                left:(Math.max(Math.min((relX),width-(pointSize/2)),(pointSize/2))+'px')
            })
        })
        $(".pinboard", this.el).on('mouseup mouseleave',function(){
            $(document).off('mousemove');
        })
        
    },
    markerTouched:function(event){
        if(this.model.get('submitted') || this.model.get('complete')) return;
        var $marker = $(event.currentTarget);
        $(document).on('touchmove', function(event){
            var pointSize = parseInt($('.pinboard .marker', this.el).css('font-size'),10)
            var offset = $('.pinboard', this.el).offset();
            var width = $('.pinboard img', this.el).width();
            var height = $('.pinboard img', this.el).height();
            var relX = event.pageX - offset.left;
            var relY = height - (event.pageY - offset.top);
            $marker.css({
                bottom:(Math.max(Math.min((relY),height-pointSize),0)+'px'),
                left:(Math.max(Math.min((relX),width-(pointSize/2)),(pointSize/2))+'px')
            })
        })
        $(document).on('touchend',function(){
            $(document).off();
        })   
    },
    submit: function (event) {
        event.preventDefault();
        if(this.model.get('selected')<1) return;
        this.model.set({
            submitted: true,
            correct:0,
            attempts: this.model.get('attempts') - 1
        });
        Adapt.tabHistory = $(event.currentTarget).parent('.inner');
        var that = this;
        var width = parseInt($('.pinboard img', this.el).width(),10);
        var height = parseInt($('.pinboard img', this.el).height(),10);    
        $('.pinboard .marker.in-use:not(.correct)', this.el).each(function(i, e){
            var mleft = parseInt($(e).css('left'),10) //+ parseInt($('.pinboard .marker', that.el).css('font-size'),10)/2;
            var mbottom = parseInt($(e).css('bottom'),10);
            
            _.each(that.model.get('items'), function(item){
                if(!item.used){
                    var pleft = (parseInt(item.left,10)/100)*width;
                    var pbottom = (parseInt(item.bottom,10)/100)*height;
                    var Pleft = pleft + (parseInt(item.width,10)/100)*width;
                    var Pbottom = pbottom + (parseInt(item.height,10)/100)*height;
                    if (mleft < Pleft && mleft > pleft && mbottom < Pbottom && mbottom > pbottom){
                        item.used = true;
                        that.model.set('correct', that.model.get('correct') + 1)
                        $(e).addClass('correct');
                    }
                    else that.model.set('correct', that.model.get('correct') - 0.01)
                }
            })
        })
        $('.submit', this.el).hide();
        if(this.model.get('correct') == this.model.get('items').length){
            this.markItems();
            this.myAnswer();
            this.model.set({complete:true, correct:true});
            if(this.model.get('assessment')) return;
            this.model.set('tutorMessage', this.model.get('feedback').correct)
        } else {
            if(this.model.get('attempts')<1) {
                this.markItems();
                this.myAnswer();
                this.model.set({complete:true, correct:false});
            } else {
                $('.reset', this.el).css('display', 'inline-block');
            }
            if(this.model.get('assessment')) return;
            if(this.model.get('correct') <= 0){          
                this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
             } else {    
                this.model.set('tutorMessage', this.model.get('feedback').partly[Math.ceil(this.model.get('attempts')/10)]);
            }
        }
        this.feedback();
    },
    feedback:function(){
        new TutorModel({
            title: this.model.get('title'),
            message: this.model.get('tutorMessage'),
            audio: this.model.get('feedback').audio
        })
    },
    reset: function(event){
        event.preventDefault();
        this.model.set({submitted: false, correct: 0, numberSelected: 0});
        $('.item label', this.$el).removeClass('selected');
        $('.submit', this.el).css('display', 'inline-block');
        $('.reset', this.el).hide();
        $('.pinboard .marker', this.el).each(function(i, e){
            $(e).removeClass('in-use correct');
        })
    },
    markItems: function() {
        var that = this;
        $('.pinboard .marker', this.el).each(function(i, e){
            if($(e).hasClass('correct')){
                $(e).removeClass('pin').addClass('tick')
                that.model.get('items')[i].correct = true;
            } else {
                $(e).removeClass('pin').addClass('cross')
            }
        })
        $('.pinboard .marker', this.el).each(function(i, e){
            var pos = {
                left: $(e).css('left'),
                bottom: $(e).css('bottom')
            }
            that.model.get("originalPositions").push(pos);
        })
    },
    modelAnswer: function(event) {
        event.preventDefault();
        $('.button.model', this.el).hide();
        $('.button.mine', this.el).css('display','inline-block');
        $('.button.mine', this.el).focus();
        $('.widget', this.el).removeClass('mine').addClass('model');
        _.each(this.model.get('items'), function(item, index) {
            var width = parseInt($('.pinboard img', this.el).width(),10);
            var height = parseInt($('.pinboard img', this.el).height(),10);
            var left = Math.ceil(((item.left+(item.width/2))/100)*width)
            var bottom = Math.ceil(((item.bottom+(item.height/2))/100)*height)
            $('.pinboard .marker', this.el).eq(index).css({
                left:left+'px',
                bottom:bottom+'px'
            })
        })
    },
    myAnswer: function(event) {
        var that = this
        if(event && event.preventDefault) event.preventDefault();
        $('.pinboard .marker', this.el).each(function(i, e){
          var left = that.model.get("originalPositions")[i].left
          var bottom = that.model.get("originalPositions")[i].bottom
          if($('html').hasClass('ie')){
              left = Math.round(parseInt(left)) + 'px'
              bottom = Math.round(parseInt(bottom)) +'px'
          }
          $(e).css({
              left: left,
              bottom: bottom
          })
        })   
        $('.button.model', this.el).css('display','inline-block');
        $('.button.mine', this.el).hide();
        $('.button.model', this.el).focus();
        $('.widget', this.el).removeClass('model').addClass('mine');
    }
})
