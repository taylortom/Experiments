Adapt.matching = ComponentView.extend ({
    tagName: "div",
    className: "component matching",
    init: function () {
        this.length = this.model.get('items').length;
        if(_.isString(this.model.get('feedback').partly)) 
            this.model.get('feedback').partly = [this.model.get('feedback').partly, this.model.get('feedback').partly] 
        if(_.isString(this.model.get('feedback').incorrect)) 
            this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
    },
    events: {
        'click .submit':'submit',
        'click .reset':'reset',
        'click .button.model':'modelAnswer',
        'click .button.mine':'myAnswer'
    },      

    submit:function (event) {
        event.preventDefault();
        if (this.model.get('submitted')) return;
        if (this.validate()) {
            this.model.set({
                score:0,
                submitted: true,
                attempts: this.model.get('attempts') - 1
            });
            this.getScore();
        }
    },
    
    validate: function() {
        var valid = true;
        $('select option:selected',this.el).each(function(){
            if ($(this).index()==0) { 
                valid = false;
                $(this).parent('select').addClass('error');
            }
        });
        if (valid) return true;
    },
    
    getScore: function() {
        $('select',this.el).attr('disabled',true).addClass('disabled');
        var that = this;
        $('select option:selected',this.el).each(function(index){
            var selectedOption = $(this).index()-1;
            if (that.model.get('items')[index].options[selectedOption].correct == true) {
                that.model.set('score', that.model.get('score')+1);
            }
        });
        if (this.model.get('score') == this.length) {
            this.correct();
        } else {
            this.incorrect();
        }
    },
    
    correct:function(){
        this.markItems();
        this.model.set({complete:true, correct:true});
        $('.button', this.$el).css('visibility','hidden');
        $('.widget', this.$el).addClass('complete');
        this.model.set('tutorMessage', this.model.get('feedback').correct);
        this.feedback();
    },
    incorrect:function(){
        if(this.model.get('attempts') === 0) {
            this.markItems();
            $('.reset' , this.el).hide();
            $('.widget', this.el).addClass('complete');
            this.model.set({complete:true, correct:false});
        } else {
            $('.reset' , this.el).css('display', 'inline-block');
            this.model.set({submitted:false});
        }
        $('.submit' , this.el).hide();
        this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
        if (this.model.get('score')>0) {
            if(this.model.get('feedback').partly)
                this.model.set('tutorMessage', this.model.get('feedback').partly[Math.ceil(this.model.get('attempts')/10)]);
        }
        this.feedback();
    },
    feedback:function(){
        if(this.model.get('assessment')) return;
        this.model.set('tutorAudio', this.model.get("feedback").audio)
        new TutorModel({
            title: this.model.get('title'), 
            message: this.model.get('tutorMessage'),
            audio: this.model.get('tutorAudio')
        });
    },
    reset:function (event){
        event.preventDefault();
        $('select', this.el).attr('disabled', false).removeClass('disabled');
        $('.reset', this.el).hide();
        $('.submit', this.el).css('display', 'inline-block');
    },
    markItems: function() {
        var that = this;
        $('select option:selected',this.el).each(function(index){
            var selectedOption = $(this).index()-1;
            that.model.get('items')[index].options[selectedOption].selected = true;
            if (that.model.get('items')[index].options[selectedOption].correct == true) {
                that.model.get('items')[index].correct = true;
                $(this).closest('.item').addClass('correct');
            } else {
                that.model.get('items')[index].correct = false;
                $(this).closest('.item').addClass('incorrect');
            }
        });
        this.myAnswer();
    },
    modelAnswer: function(event) {
        event.preventDefault();
        var that = this;
        $('.button.model', this.el).hide();
        $('.button.mine', this.el).css('display', 'inline-block');
        $('.button.mine', this.el).focus();
        $('.widget', this.el).removeClass('mine').addClass('model');
        _.each(this.model.get('items'), function(item, index){
            var itemIndex = index;
            _.each(item.options, function(option, index){
                if (option.correct==true) {
                    var correctIndex = index+1;
                    var $parent = $('select', that.el).eq(itemIndex);
                    $('option', $parent).eq(correctIndex).attr('selected', 'selected');
                }
            });
        });
    },
    myAnswer: function(event) {
        if(event) event.preventDefault();
        var that = this;
        $('.button.model', this.el).css('display', 'inline-block');
        $('.button.model', this.el).focus();
        $('.button.mine', this.el).hide();
        $('.widget', this.el).removeClass('model').addClass('mine');
        _.each(this.model.get('items'), function(item, index){
            var itemIndex = index;
            _.each(item.options, function(option, index){
                if (option.selected==true) {
                    var correctIndex = index+1;
                    var $parent = $('select', that.el).eq(itemIndex);
                    $('option', $parent).eq(correctIndex).attr('selected', 'selected');
                }
            });
        });
    }
});