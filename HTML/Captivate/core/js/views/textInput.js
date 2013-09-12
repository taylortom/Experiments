Adapt.textinput = ComponentView.extend ({
    tagName: "div",
    className: "component textinput",
    init: function () {
        this.model.set('selected',0);
        if(_.isString(this.model.get('feedback').incorrect)) this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
    },
    events: {
        'click .item label':'itemSelected',
        'click .submit':'submit',
        'click .reset':'reset',
        'click .button.model':'modelAnswer',
        'click .button.mine':'myAnswer'
    },

    setup: function() {

        if (this.model.get('complete') && !this.model.get('correct')) {
            $('.textbox', this.el).attr('disabled',true);
            $(".button.submit", this.el).css('display','none');
            $('.button.model', this.el).css('display','inline-block');
            this.reTick();
        } else if (this.model.get('complete') && this.model.get('correct')) {
            $('.textbox', this.el).attr('disabled',true);
            $(".button.submit", this.el).css('display','none');
            this.reTick();
        }
        this.model.set('ready', true);
    },
    
    submit:function (event) {
        var valid = true;
        event.preventDefault();
        $(".textbox", this.el).each(function(event) {
            var validatePass = false;
            if($(this).val()=="") {
                valid = false;  
            }
           
        });
        if(valid) {
            this.model.set({attempts:this.model.get('attempts') - 1});
            if(this.model.get('dynamic')) {
                this.checkDynamicAnswers();    
            } else if(!this.model.get('dynamic')) {
                this.checkAnswers();    
            }
            this.feedback();
            $('input', this.el).attr('disabled',true);
        };
    },
    
    checkAnswers:function() {
        console.log('non dynamic');
        var that = this;
        var $textbox;
        var correctCount = 0;
        var textboxLength = $('.textbox').length;
        var allAnswersLength = this.model.get("items").length;
        _.each(that.model.get('items'), function(item){
            item.used = false;
        });
        $(".textbox", this.el).each(function(index, element) {
            $textbox = $(this);
            var textboxVal = $textbox.val();
            if(that.model.get('anyCase')){
                textboxVal = textboxVal.toLowerCase();
            }
            if(that.model.get('anyPunctuation')) {
                var textboxValClean = textboxVal.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g,"");
                textboxVal = $.trim(textboxValClean);
            }
            var correctAnswer = that.model.get('items')[index].answers;
            var correctAnswerLength = correctAnswer.length;
            _.each(correctAnswer, function(item) {
                    if(that.model.get('anyCase')) {
                        item = item.toLowerCase();
                    }
                    if(that.model.get('anyPunctuation')) {
                        var correctAnswerClean = item.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g,"");
                        item = $.trim(correctAnswerClean);
                    }
                    if(item == textboxVal) {
                        correctCount++;
                        item.used = true;
                        item.tick = true;
                        $textbox.siblings(".result").addClass("correct icon tick");
                    }
            });   
        });
        $(".textbox", this.el).each(function(event){
            if(!$(this).siblings(".result").hasClass("icon tick")) {
                $(this).siblings(".result").addClass("icon cross");
            }
        });
        if(correctCount == allAnswersLength) {
            this.passed();
        } else {
            this.failed();
        }   
    },
   
    checkDynamicAnswers:function(){
        console.log('dynamic');
        var that = this;
        var correctCount = 0;
        var $textbox;
        var allAnswersLength = this.model.get("items").length;
        _.each(that.model.get('items'), function(item){
            item.used = false;
        });
        $(".textbox", this.el).each(function(event) {
            $textbox = $(this);
            var textboxVal = $textbox.val();
            
            if(that.model.get('anyCase')){
                textboxVal = textboxVal.toLowerCase();
            }
            if(that.model.get('anyPunctuation')) {
                var textboxValClean = textboxVal.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g,"");
                textboxVal = $.trim(textboxValClean);
            }
            
            _.each(that.model.get("items"), function(item) {
                var answersLength = item.answers.length;
                    if(item.used != true) {
                        
                        for(i = 0; i < answersLength; i++) {
                            var correctAnswer = item.answers[i];
                            if(that.model.get('anyCase')) {
                                correctAnswer = correctAnswer.toLowerCase();
                            }
                            if(that.model.get('anyPunctuation')) {
                                var correctAnswerClean = correctAnswer.replace(/[\.,-\/#!$£%\^&\*;:{}=\-_`~()]/g,"");
                                correctAnswer = $.trim(correctAnswerClean);
                            }
                            if(correctAnswer == textboxVal) {
                                correctCount++;
                                item.used = true;
                                item.tick = true;
                                $textbox.siblings(".result").addClass("correct icon tick");
                                break;
                            }      
                        }
                    }    
            });
            
        });
        $(".textbox", this.el).each(function(event){
            if(!$(this).siblings(".result").hasClass("icon tick")) {
                $(this).siblings(".result").addClass("icon cross");
            }
        });
        if(correctCount == allAnswersLength) {
            this.passed();
        } else {
            this.failed();
        }
        
    },
    
    reTick: function() {
        var mySavedAnswers = this.model.get('myAnswers');
        for(i = 0; i < this.model.get("items").length; i++) {
            $(".textbox", this.el).eq(i).attr({value:this.model.get('myAnswers')[i]});
        }
        this.checkAnswers();
    },
    
    failed:function() {
        var that = this;
        console.log(this.model.get('attempts'));
        $(".button.submit", this.el).css('display','none');
        this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
        if(this.model.get("attempts") == 0) {
                console.log('failed');
                $(".button.reset", this.el).css('display','none');
                    var myAnswers = [];
                    $(".textbox", this.el).each(function(index) {
                    myAnswers.push($(this).val());
                    that.model.get('items')[index].myAnswer = $(this).val();
                });
            this.model.set('myAnswers',myAnswers);
            this.noAttempts();
            this.model.set('complete',true);
        } else {
            $(".button.reset", this.el).css('display','inline-block');    
        }
        this.feedback();

        
    },
    
    passed:function() {
        var that = this;
        $(".button.submit", this.el).css('visibility','hidden');
        this.model.set('tutorMessage', this.model.get('feedback').correct);
        this.feedback();
        this.model.set('complete',true);
        var myAnswers = [];
        $(".textbox", this.el).each(function(index) {
            myAnswers.push($(this).val());
            that.model.get('items')[index].myAnswer = $(this).val();
        });
        this.model.set('myAnswers',myAnswers);
        this.model.set({correct:true});
    },
    
    noAttempts:function() {
        $(".button.model", this.el).css('display','inline-block');
    },
    
    feedback:function(){
        if(this.model.get('assessment')) return;
        this.model.set('tutorAudio',this.model.get('feedback').audio)
        if(!this.model.get('complete')) 
            this.model.set('tutorAudio',false);
        new TutorModel({
            title: this.model.get('title'), 
            message:this.model.get('tutorMessage'),
            audio:this.model.get('tutorAudio')
        });
    },
    
    modelAnswer:function (event) {
        event.preventDefault();
        var that = this;
        $(".textbox", this.el).siblings(".result").each(function(event){
            if(!$(this).hasClass("icon tick")) {
                $(this).removeClass("icon cross");
                $(this).addClass("icon tick");
            }
        });
        $('.button.model', this.el).css('display','none');
        $(".button.mine", this.el).css('display','inline-block');
        var that = this;
        var allAnswersLength = this.model.get("items").length;
        var items = this.model.get("items");
        var myAnswers = [];
        if (!this.model.get('complete')) {
           $(".textbox", this.el).each(function(index, event) {
                myAnswers.push($(this).val());
                var currentItem = that.model.get('items')[index];
                $(this).attr({value:currentItem.answers[0]});
                $(this).siblings(".prefix").contents("p").html("model answer").show();
                that.model.get('items')[index].myAnswer = $(this).val();
                that.model.set('myAnswers',myAnswers);
            });    
        
        } else if (this.model.get('complete')) {
            $(".textbox", this.el).each(function(index, event) {
                var currentItem = that.model.get('items')[index];
                $(this).attr({value:currentItem.answers[0]});
            }); 
        }
        
    },
    
    myAnswer:function(event) {
        if (event) event.preventDefault();
        var that = this; 
        $(".button.mine", this.el).css('display','none');
        $('.button.model', this.el).css('display','inline-block');
        $(".textbox", this.el).siblings(".result").each(function(event){
            $(this).removeClass("icon tick");
            $(this).removeClass("icon cross");
        });
        this.reTick();
    },
    
    reset:function (event){
        var that = this;
        event.preventDefault();
        
        if(this.model.get("attempts") === 0) {
            $(".button.reset", this.el).css('display','none');
            this.noAttempts(); 
        }
        else {
            $(".button.submit", this.el).css('display','inline-block');
            $('.button.reset', this.el).css('display','none');
            $('input', this.el).attr('disabled',false);
            $(".answers", this.el).removeClass("marked");
            $(".textbox", this.el).each(function(event) {
                if(!$(this).siblings(".result").hasClass("correct")) {
                    $(this).attr({value:""});
                    $(this).siblings(".result").removeClass("icon cross");
                    $(this).siblings(".result").contents("p").show();
                    _.each(that.model.get('items'), function(item){
                        item.used = false;
                    });
                }
            });
        }
    }

});
