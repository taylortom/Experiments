Adapt.slider = ComponentView.extend({
    tagName: "div",
    className: "component slider",
    init: function() {
        Adapt.once('pageReady',this.scaleSetup, this);
        if(_.isString(this.model.get('feedback').incorrect)) this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
        this.listenTo(Adapt.Manager.model, "change:screenSize", this.scaleSetup, this);
    },
    events: function () {
        return Adapt.Manager.model.get('touch') == true ? {
            'click .submit': 'submit',
            'click .slider.handle':'clickHandle',
            'click .slider': 'sliderClick',
            'click .reset': 'reset',
            'click .model': 'modelSelect',
            'click .mine': 'myAnswerSaved',
            'touchstart .slider.handle':'touchEvents'
        } : {
            'click .submit': 'submit',
            'click .slider.handle':'clickHandle',
            'mousedown .slider.handle': 'moveHandle',
            'click .slider': 'sliderClick',
            'click .reset': 'reset',
            'click .model': 'modelSelect',
            'click .mine': 'myAnswerSaved',
            'focus .slider.handle':'arrowKeyMove'
        }
    },
    
    setup: function () {
        var that = this;

        if(!this.model.get('score')) this.model.set('score', 0);
        $('.handle', this.el).attr('alt', this.model.get('score'));
        if(this.model.get("complete") && !this.model.get("correct")) {
            $(".slider.handle", this.el).css("display","none");
            $('.submit', this.el).css({ display: 'none'});
            $(".widget .result", this.el).css("background-color","#f66158").addClass("icon cross");
            this.disable();
            Adapt.once('page:ready',function(){
                that.myAnswerSaved();
            });            
        } else if(this.model.get("complete") && this.model.get("correct")) {
            $(".slider.handle", this.el).css("display","none");
            $('.scale.marker', this.el).css({left:0});
            $(".button").css("display","none");
            $(".widget .result", this.el).css("background-color","#8fc344").addClass("icon tick");
            Adapt.once('page:ready',function(){
                that.myAnswerSaved();
            });
            that.disable();
        }        
        this.model.set('ready', true)
    },
    
    scaleSetup: function() {
        $(".markers", this.el).empty();
        var scaleWidth = $('.scaler', this.el).width();
        var steps = this.model.get('steps')-1;
        var stepDistance = Math.round(scaleWidth/steps);
        var scalePos = 0;
        for(i = 0, l = steps+1; i < l; i++) {
            $("<div class='line'>").appendTo(".markers").css({left: scalePos + 'px'});
            scalePos += stepDistance;
        }
    },
    
    myAnswerSaved: function(event) {
        if (event) event.preventDefault();
        var that = this;
        $(".model-answer", this.el).css("display","none");
        $('.model-answer', this.el).animate({left:0});
        $('.onemodel.answer', this.el).css("display","none");
        $('.onemodel.answer', this.el).css({left:0});
        var myAnswer = this.model.get('score');
        var width = $('.slider', this.el).width();
        var stepDistance = this.model.get('steps')-1;
        var scale = this.model.get("scalestart");
        var myPosition = (myAnswer-scale)*(width/stepDistance);
        this.showScaleMarker();
        $('.scale.marker', this.el).addClass('display-block').animate({left: myPosition + 'px'});
        if(this.model.get("showNumber")) {
             $('.scale.marker', this.el).html(that.model.get('score'));
        }
        $('.bar', that.el).animate({width:myPosition + 'px'});
        $(".widget .mine", this.el).css("display","none");
        if(!this.model.get("correct")) {
            $(".widget .model", this.el).css("display","inline-block");
        }
    },
                                    
    clickHandle: function(event) {
        event.preventDefault();
    },
        
    moveHandle: function (event) {
        event.preventDefault();
        if (this.model.get("complete") || this.model.get("submitted")) return;
        var that = this;
        var width = $('.slider', that.el).width();
        var left;
        var offset = $('.slider', that.el).offset().left;
        var stepDistance = this.model.get('steps')-1;
        var scale = this.model.get("scalestart");
        var score;
        
        $(document).on('mousemove', function (event) {
            event.preventDefault();
            left = Math.max(Math.min((event.pageX - offset), width), 0);
            $('.slider.handle', that.el).css({
                left: left + 'px'
            });
            that.showScaleMarker();
            $('.scale.marker', that.el).css({
                left: left + 'px'
            });
            score = Math.round((left/width)*stepDistance)+1;
            $('.handle', that.el).attr('alt', score);
            that.model.set({
                'score': scale+score-1
            });
            if(that.model.get("showNumber")) {
                $('.scale.marker', that.el).html(that.model.get('score'));
            }
        });
        $(document).one('mouseup', function () {
            $(document).off('mousemove');
            var position = (score-1)*(width/stepDistance);
            
            that.model.set({
                'position': position
            });
            $('.slider.handle', that.el).animate({
                left: position + 'px'
            },200);
            $('.bar', that.el).animate({width:position + 'px'});
            $('.scale.marker', that.el).animate({
                left: position + 'px'
            },200);
            $('.bar', that.el).animate({width:position + 'px'});
            
        });
    },
    
    sliderClick: function (event) {
        if (this.model.get("complete") || this.model.get("submitted")) return;
        var that = this;
        var width = $('.slider', this.el).width();
        var offset = $('.slider', this.el).offset().left;
        var left = Math.max(Math.min((event.pageX - offset), width), 0);
        var stepDistance = this.model.get('steps')-1;
        var score = Math.round((left/width)*stepDistance)+1;
        var position = (score-1)*(width/stepDistance);
        var scale = this.model.get("scalestart");
        $('.slider.handle', this.el).animate({
            left: position + 'px'
        },200);
        $('.bar', that.el).animate({width:position + 'px'});
        that.showScaleMarker();
        $('.scale.marker', this.el).animate({
                left: position + 'px'
            },200);
        this.model.set({
            'score': scale+score-1,
            'position': position
        });
        if(this.model.get("showNumber")) {
            $('.scale.marker', this.el).html(that.model.get('score'));
        }
    },
    
    arrowKeyMove: function(event) {
        event.preventDefault();
        if (this.model.get("complete") || this.model.get("submitted")) return;
        var that = this;
        var width = $('.slider', this.el).width();
        var offset = $('.slider', this.el).offset().left;
        var stepDistance = this.model.get('steps')-1;
        var stepBottom = (stepDistance-stepDistance)+1;
        var scale = this.model.get("scalestart");
        var handlePos;
        var notReady = false;
        $('.slider.handle', this.el).on('keydown',  function(e) {
            if(notReady) return;
            if(e.which == 37) {
                notReady = true;
                handlePos = $('.slider.handle', that.el).offset().left;
                var score = Math.round((handlePos/width)*stepDistance)-1;
                var position = (score-1)*(width/stepDistance);
                var moveHandlePos = width/stepDistance;
                if (score >= stepBottom && score <= stepDistance+1) {
                    
                    that.model.set({
                        'score': scale+score-1,
                        'position': position
                    });
                    if(that.model.get("showNumber")) {
                        $('.scale.marker', that.el).html(that.model.get('score'));
                    }
                    $('.slider.handle', that.el).stop().animate({  left: "-=" + moveHandlePos + 'px' },function(){
                        notReady = false;
                    });
                    $('.bar', that.el).animate({width: "-=" + moveHandlePos  + 'px'});
                    that.showScaleMarker();
                    $('.scale.marker', that.el).stop().animate({  left: "-=" + moveHandlePos + 'px' },function(){
                        notReady = false;
                    });
                }
                else notReady = false;
            }
            if(e.which == 39) {
                notReady = true;
                handlePos = $('.slider.handle', that.el).offset().left;
                var score = Math.round((handlePos/width)*stepDistance)+1;
                var position = (score-1)*(width/stepDistance);
                var moveHandlePos = width/stepDistance;
                if (score >= stepBottom && score <= stepDistance+1) {
                    that.model.set({
                        'score': scale+score-1,
                        'position': position
                    });
                    if(that.model.get("showNumber")) {
                        $('.scale.marker', that.el).html(that.model.get('score'));
                    }
                    $('.slider.handle', that.el).stop().animate({  left: "+=" + moveHandlePos + 'px' }, function(){
                        notReady = false;
                    });
                    $('.bar', that.el).animate({width: "+=" + moveHandlePos  + 'px'});
                    that.showScaleMarker();
                    $('.scale.marker', that.el).stop().animate({  left: "+=" + moveHandlePos + 'px' }, function(){
                        notReady = false;
                    });
                }
                else notReady = false;
            }
        });
    },
    
    touchEvents: function (event) {
        console.log('touch');
        event.preventDefault();
        if (this.model.get("complete") || this.model.get("submitted")) return;
        var that = this;
        var width = $('.slider', that.el).width();
        var left;
        var offset = $('.slider', that.el).offset().left;
        var stepDistance = this.model.get('steps')-1;
        var scale = this.model.get("scalestart");
        var score;
        $(document).on('touchmove', function (event) {
            left = Math.max(Math.min((event.originalEvent.touches[0].pageX - offset), width), 0);
            $('.slider.handle', that.el).css({
                left: left + 'px'
            });
            that.showScaleMarker();
            $('.scale.marker', that.el).css({
                left: left + 'px'
            });
            score = Math.round((left/width)*stepDistance)+1;
            $('.handle', that.el).attr('alt', score);
            that.model.set({
                'score': scale+score-1
            });
            if(that.model.get("showNumber")) {
                $('.scale.marker', that.el).html(that.model.get('score'));
            }
        });
        $(document).one('touchend', function () {
            $(document).off('touchmove');
            var position = (score-1)*(width/stepDistance);
            
            that.model.set({
                'position': position
            });
            $('.slider.handle', that.el).animate({
                left: position + 'px'
            },200);
            
            $('.scale.marker', that.el).animate({
                left: position + 'px'
            },200);
            $('.bar', this.el).animate({width:position + 'px'});
        });
    },
    
    showScaleMarker: function() {
        if (this.model.get('showScaleIndicator')) {
            $('.scale.marker', this.el).addClass('display-block');
        }
    },
    
    disable: function () {
        $('.slider.handle', this.el).css({
            cursor: 'default'
        });
        $('.slider.handle', this.el).removeAttr("href");
        $('.model.answer', this.el).css({
            cursor: 'default'
        });
    },
    
    submit: function (event) {
        var that = this;
        event.preventDefault();
        this.disable();
        this.model.set({submitted:true});
        this.model.set({attempts:this.model.get('attempts') - 1});
        var answerSelected = this.model.get("answer");
        var rangeSelected = this.model.get("range").bottom;
        var userScore = this.model.get('score');
        var attempts = this.model.get("attempts");
        var scale = this.model.get("scalestart");
        if(answerSelected !== "") {
            var correctAnswer = this.model.get('answer');
            if(userScore == correctAnswer) {
                $('.submit', this.el).css({ visibility: 'hidden'});
                $(".widget .result", this.el).css("background-color","#8fc344").addClass("icon tick");
                that.model.set({correct:true,complete:true});
                that.passed();
            } else if(userScore != correctAnswer) {
                $('.submit', this.el).css({ display: 'none'});
                $(".widget .result", this.el).css("background-color","#f66158");
                $(".widget .result", this.el).addClass("icon cross");
                if(this.model.get("attempts") > 0) {
                    $('.reset', this.el).css("display","inline-block");
                    that.failed();
                } else if(this.model.get("attempts") === 0) {
                    $(".widget .model", this.el).css("display","inline-block");
                    that.failed();
                    that.disable(); 
                    that.model.set({complete:true});
                    that.model.set({score:userScore});
                } 
            }
        } else if(rangeSelected !== "") {
            var rangeBottom = this.model.get("range").bottom;
            var rangeTop = this.model.get("range").top;
            if(userScore >= rangeBottom && userScore <= rangeTop) {
                $('.submit', this.el).css({ visibility: 'hidden'});
                $(".widget .result", this.el).css("background-color","#8fc344");
                $(".widget .result", this.el).addClass("icon tick");
                that.model.set({correct:true});
                that.model.set({complete:true});
                that.passed();
            } else if(userScore < rangeBottom || userScore > rangeTop) {
                $('.submit', this.el).css({ display: 'none'});
                $(".widget .result", this.el).addClass("icon cross");
                $(".widget .result", this.el).css("background-color","#f66158");
                that.failed();
                if(this.model.get("attempts") > 0) {
                    $('.reset', this.el).css("display","inline-block");
                } else if(this.model.get("attempts") == 0) {
                    $(".widget .model", this.el).css("display","inline-block");
                    that.failed();
                    that.disable();
                    that.model.set({complete:true});
                }
            }
        }
        
    },
    
    modelSelect:function (event) {
        event.preventDefault();
        var that = this;
        $(".scale.marker", this.el).removeClass('display-block');
        $('.scale.marker', this.el).animate({left:0});
        $(".slider.handle", this.el).css("display","none");
        $('.slider.handle', this.el).animate({left:0});
        var answerSelected = this.model.get("answer");
        var rangeSelected = this.model.get("range").bottom;
        if(answerSelected !== "") {
            this.modelAnswer();
        } else if(rangeSelected !== "") {
            $(".modelranges").empty();
            this.modelRange();
        }
        $(".widget .model", this.el).css("display","none");
        $(".widget .mine", this.el).css("display","inline-block");
        
    },
    
    modelAnswer: function() {
        var that = this;
        var width = $('.slider', this.el).width();
        var offset = $('.slider', this.el).offset().left;
        var stepDistance = this.model.get('steps')-1;
        var modelScore = this.model.get('answer');
        var scale = this.model.get("scalestart");
        var position = (modelScore-scale)*(width/stepDistance);
        $('.onemodel.answer', this.el).css("display","block").animate({left: position + 'px'});
        $('.bar', that.el).animate({width:position + 'px'});
    },
    
    modelRange: function() {
        var that = this;
        var myPosition = this.model.get("position");
        var width = $('.slider', this.el).width();
        var offset = $('.slider', this.el).offset().left;
        var stepDistance = this.model.get('steps')-1;
        var rangeBottom = this.model.get("range").bottom;
        var rangeTop = this.model.get("range").top;
        var rangeTotal = rangeBottom+rangeTop;
        var rangeMid = rangeTotal/2;
        var positionBottom = (rangeBottom)*(width/stepDistance);
        var positionTop = (rangeTop)*(width/stepDistance);
        var positionMid = (rangeMid)*(width/stepDistance);
        var labelWidth = positionTop - positionBottom;
        var scale = this.model.get("scalestart");
        var windowWidth = $(window).width();
        var modelScore = 0;
        this.model.set("positions", []);
        this.model.set("correctValues", []);
        var myAnswer = myPosition/(width/stepDistance);
        var position = 0;
        for(i=rangeBottom, l=rangeTop+1; i < l; i++) {
            this.model.get("correctValues").push(i);
        }
        for(i=0, l=this.model.get("correctValues").length; i < l; i++) {
            modelScore = this.model.get("correctValues")[i];
            this.model.get("positions").push((modelScore-scale)*(width/stepDistance));    
        }
        _.each(this.model.get('positions'), function(item){
            $("<div class='model-answer'>").appendTo(".modelranges").fadeIn(200,function() {
                $(this).animate({left: item + 'px'});
            });
        });
        if(this.model.get("showNumber")) {
            $(".model-answer").each(function(index) {
                var modelscore = that.model.get('correctValues')[index]
                $(this).html(modelscore);
            });
        }
        $('.bar', that.el).animate({width:positionTop + 'px'});
    },
    
    passed: function() {
        this.model.set('tutorMessage', this.model.get('feedback').correct);
        this.feedback();
    },
    
    failed:function() {
        this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
        this.feedback();
    },
    
    feedback: function() {
        if(this.model.get('assessment')) return;
        new TutorModel({
            title: this.model.get('title'), 
            message:this.model.get('tutorMessage'),
            audio:this.model.get('feedback').audio
        });
    },
    
    reset:function(event) {
        if (event) {
            event.preventDefault();
        }
        $('.reset', this.el).css("display","none");
        var that = this;
        this.model.set({submitted:false});
        var answerSelected = this.model.get("answer");
        var rangeSelected = this.model.get("range").bottom;
        //this.model.set({attempts:this.model.get('attempts') - 1});
        this.model.set('position',0);
        this.model.set('score',0);
        $(".widget .result", this.el).css("background-color","transparent").removeClass("icon cross");
        $('.slider.handle', this.el).animate({left:0});
        $('.slider.handle', this.el).empty();
        $(".scale.marker", this.el).fadeOut(200);
        $('.scale.marker', this.el).animate({left:0});
        $('.scale.marker', this.el).empty();
        $('.submit', this.el).css("display","inline-block");
        $('.bar', this.el).animate({width:'0px'});      
    }
});
