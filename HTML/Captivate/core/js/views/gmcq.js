Adapt.gmcq = ComponentView.extend ({
    tagName: "div",
    className: "component gmcq",
    init: function () {
        this.listenTo(Adapt.Manager.model, 'change:screenSize', this.setup, this);
        this.model.set('selected',0);
        if(_.isString(this.model.get('feedback').partly)) 
            this.model.get('feedback').partly = [this.model.get('feedback').partly, this.model.get('feedback').partly] 
        if(_.isString(this.model.get('feedback').incorrect)) 
            this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
    },
    
    events: function () {
        if ($('html').hasClass('ie8')) {
            return {
                'focus .item input':'itemHighlighted',
                'blur .item input':'itemDeHighlighted',
                'change .item input':'itemSelected',
                'click .submit':'submit',
                'click .reset':'reset',
                'click .button.model':'modelAnswer',
                'click .button.mine':'myAnswer',
                'click label img':'fakeClick'
            };
        } else {
            return {
                'focus .item input':'itemHighlighted',
                'blur .item input':'itemDeHighlighted',
                'change .item input':'itemSelected',
                'click .submit':'submit',
                'click .reset':'reset',
                'click .button.model':'modelAnswer',
                'click .button.mine':'myAnswer'
            };
        }
    },
    
    setup:function() {
        if(Adapt.Manager.model.get('screenSize') > 699) {
            var itemWidth = 100/this.model.get('columns');
            $('.item', this.el).css('width',itemWidth+'%');
        } else {
            $('.item', this.el).css('width','50%');
        }
        var that = this;
        $('.widget', this.el).imageready(function(){
            that.model.set('ready', true);
        });
        this.pointSetup();
    },
    
    pointSetup:function() {
        console.log('pointsetup');
        var that = this;
        if(!this.model.get('point')) return;
        $('.item', this.el).css({
            position:'absolute',
            width:'auto'
        });
        $('.state', this.el).css({
            marginTop:'-50%',
            marginLeft:'-50%'
        });
        $('.item label', this.el).css({
            backgroundColor:'transparent'
        });
        if(Adapt.Manager.model.get('screenSize') > 699) {
            $('.item', this.el).each(function(index, element) {
                var top = that.model.get('items')[index].desktopTop;
                var left = that.model.get('items')[index].desktopLeft;
                $(this).css({
                    top:top+'%',
                    left:left+'%'
                });  
            });
        } else {
            $('.item', this.el).each(function(index, element) {
                var top = that.model.get('items')[index].mobileTop;
                var left = that.model.get('items')[index].mobileLeft;
                $(this).css({
                    top:top+'%',
                    left:left+'%'
                });  
            });    
        }
    },
    
    preRender:function(){
        if(this.model.get('random')) this.model.set("items", _.shuffle(this.model.get("items")));
    },
    
    fakeClick: function(event) {
        $("#" + $(event.currentTarget).closest("label").attr("for")).change();
    },
    
    itemHighlighted: function(event) {
        $(event.currentTarget).prev('label').addClass('highlighted');
    },
    
    itemDeHighlighted: function(event) {
        $(event.currentTarget).prev('label').removeClass('highlighted');
    },
    
    itemSelected:function (event) {
        console.log('clicked');
        var that = this;
        if(!this.model.get('complete') && !this.model.get('submitted')){
            if(!$(event.currentTarget).siblings('label').hasClass('selected')){
                if(that.model.get('selectable') === 1){
                    console.log('event',event)
                    console.log('eventTarg',event.currentTarget);
                    $('label', that.el).removeClass('selected');
                    $('input', that.el).prop('checked', false);
                    _.each(this.model.get('items'), function(item){ item.selected = false; });
                    console.log($(event.currentTarget).parent('.item').index());
                    that.model.set('selected',  that.model.get('items')[$(event.currentTarget).parent('.item').index()]);
                    that.model.get('selected').selected = true;
                    $(event.currentTarget).siblings('label').addClass('selected');
                } 
                else if(that.model.get('selected') < this.model.get('selectable')){
                    that.model.get('items')[$(event.currentTarget).parent('.item').index()].selected = true;
                    that.model.set('selected', that.model.get('selected') + 1);
                    $(event.currentTarget).siblings('label').addClass('selected');
                };
            }
            else {
                that.model.get('items')[$(event.currentTarget).parent('.item').index()].selected = false;
                that.model.set('selected', that.model.get('selected') - 1);            
                $(event.currentTarget).siblings('label').removeClass('selected');
            };
        }
    },
    
    submit:function (event) {
        event.preventDefault();
        if(!this.model.get('selected')) return;
        var that = this;
        Adapt.tabHistory = $(event.currentTarget).parent('.widget');
        this.model.set({
            submitted: true,
            correct:0,
            attempts: this.model.get('attempts') - 1
        });

        _.each(this.model.get('items'), function(item, i){
            if(item.selected && item.correct){
                that.model.set('correct', that.model.get('correct') + 1);
                that.model.set('selectedCorrect', true); 
            } 
            else if(item.selected && !item.correct){
                that.model.set('correct', that.model.get('correct') - 1);
            } 
            else if(!item.selected && !item.correct){
                that.model.set('correct', that.model.get('correct') + 1);
            } 
            else if(!item.selected && item.correct){
                that.model.set('correct', that.model.get('correct') - 1);
            }
        });
        if(this.model.get('correct') == this.model.get('items').length){
            this.correct();
        } else {
            this.incorrect()
        };
        this.feedback();
    },
    
    correct:function(){
        this.markItems();
        this.model.set({complete:true, correct:true});
        $('.button', this.$el).css('visibility','hidden');
        this.model.set('tutorMessage', this.model.get('feedback').correct);
    },
    
    incorrect:function(){
        if(this.model.get('attempts') === 0) {
            this.markItems();
            $('.reset' , this.el).hide();
            this.model.set({complete:true, correct:false});
        } else {
            $('.reset' , this.el).css('display', 'inline-block');
        }
        $('.widget', this.el).addClass('complete');
        $('.submit' , this.el).hide();
        this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
        if(this.model.get('selectedCorrect')) this.partCorrect();
    },
    
    partCorrect:function(){
        if(this.model.get('feedback').partly)
            this.model.set('tutorMessage', this.model.get('feedback').partly[Math.ceil(this.model.get('attempts')/10)]);
    },
    
    feedback:function(){
        if(this.model.get('assessment')) return;
        this.model.set('tutorAudio', this.model.get("feedback").audio)
        if(this.model.get('selectable') === 1 && this.model.get('selected').feedback)
            this.model.set('tutorMessage', this.model.get('selected').feedback);
        if(this.model.get('selectable') === 1 && this.model.get('selected').audio)
            this.model.set('tutorAudio', this.model.get('selected').audio);
        new TutorModel({
            title: this.model.get('title'), 
            message: this.model.get('tutorMessage'),
            audio: this.model.get('tutorAudio')
        });
    },
    
    reset:function (event){
        event.preventDefault();
        this.model.set({
            submitted: false, 
            selected: 0
        });
        $('.item label', this.el).removeClass('selected');
        $('input', this.el).prop('checked', false);
        $('.reset', this.el).hide();
        $('.submit', this.el).css('display', 'inline-block');
        _.each(this.model.get('items'), function(item){
           item.selected = false;
        });
    },
    
    markItems: function() {
        var that = this;
        _.each(this.model.get('items'), function(item, i){
            if(item.correct) $('.item', that.el).eq(i).addClass('correct');
            else $('.item', that.el).eq(i).addClass('incorrect');
        });
        this.myAnswer();
    },
    
    modelAnswer: function(event) {
        event.preventDefault();
        $('.button.model', this.el).hide();
        $('.button.mine', this.el).css('display', 'inline-block');
        $('.button.mine', this.el).focus();
        $('.widget', this.el).removeClass('mine').addClass('model');
    },
    
    myAnswer: function(event) {
        if(event) event.preventDefault();
        $('.button.model', this.el).css('display', 'inline-block');
        $('.button.model', this.el).focus();
        $('.button.mine', this.el).hide();
        $('.widget', this.el).removeClass('model').addClass('mine');
    }
});
