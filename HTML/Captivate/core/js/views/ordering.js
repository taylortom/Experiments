Adapt.ordering = ComponentView.extend ({
    tagName: "div",
    className: "component ordering",
    init: function () {
        this.itemLength = this.model.get('items').length;
        if(!this.model.get('complete')){
            this.shuffle();          
            this.model.set('score', 0);
        } else {
            var items = _.sortBy(this.model.get('items'), function(item){ 
                return item.index; 
            });
            this.model.set('items', items);
        }
        if(_.isString(this.model.get('feedback').partly)) 
            this.model.get('feedback').partly = [this.model.get('feedback').partly, this.model.get('feedback').partly] 
        if(_.isString(this.model.get('feedback').incorrect)) 
            this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
    },
    
    setup: function() {
        this.model.set('ready', true);
        if(this.model.get('complete')){
            if (this.model.get('correct')) {
                this.modelAnswer();
            } else {
                this.myAnswer();
            }
        }
    },
    
    events: {
        'click .preview':'preview',
        'click .submit':'submit',
        'click .reset':'reset',
        'click .button.model':'modelAnswer',
        'click .button.mine':'myAnswer',
        'click .spinner.up':'spinnerUp',
        'click .spinner.down':'spinnerDown'
    },
    
    shuffle: function() {
        var items = this.model.get('items');
        _.each(items, function(item, index){
            item.index = index+1;
        });
        this.model.set("items", _.shuffle(this.model.get("items")));
        var items = this.model.get('items');
        _.each(items, function(item, index){
            item.position = index+1;
        });
    },
    
    spinnerUp: function(event) {
        event.preventDefault();
        if (this.model.get('submitted')) return;
        this.model.set('previewed', false);
        var $currentInput = $(event.currentTarget).siblings('.input-spinner');
        if ($currentInput.html() > this.itemLength-1) {
            return;
        }
        if ($currentInput.html() == '-') {
            $currentInput.html(1);
            return;
        }
        var currentValue = parseInt($currentInput.html());
        currentValue++;
        $currentInput.html(currentValue);        
    },
    
    spinnerDown: function(event) {
        event.preventDefault();
        if (this.model.get('submitted')) return;
        this.model.set('previewed', false);
        var $currentInput = $(event.currentTarget).siblings('.input-spinner');
        if ($currentInput.html() == 1) {
            return;
        }
        if ($currentInput.html() == '-') {
            return;
        }
        var currentValue = $currentInput.html();
        currentValue--;
        $currentInput.html(currentValue);
    },
    
    preview: function(event) {
        event.preventDefault();
        if (this.model.get('complete') || this.model.get('previewed')) return;
        $('.item', this.el).removeClass('error');
        _.each(this.model.get('items'), function(item, index){
            item.used = false;
        });
        if (this.validInput()) {
            this.previewInput();
        }
    },
    
    validInput: function(){
        var that = this;
        var valid = true;
        var usedOrder = [];
        $('.input-spinner', this.el).each(function(event){
            var inputValue = $(this).html();
            if (isNaN( inputValue )) {
                $(this).closest('.item').addClass('error');
                valid = false;
            } else 
            if (inputValue > that.itemLength) {
                $(this).closest('.item').addClass('error');
                valid = false;
            } else 
            if (inputValue.length > 1) {
                $(this).closest('.item').addClass('error');
                valid = false;
            } else 
            if (inputValue == 0) {
                $(this).closest('.item').addClass('error');
                valid = false;
            } else 
            if ($.inArray(inputValue, usedOrder) > -1) {
                $(this).closest('.item').addClass('error');
                valid = false;
            } else {
                usedOrder.push(inputValue);
            }
        });
        if (valid) {
            return true;
        } else {
            alert(this.model.get('previewError'));
        }
    },
    
    previewInput: function() {
        var that = this;
        this.model.set('previewed', true);
        var items = this.model.get('items');
        $('.item', this.el).each(function(index, element){
            var itemIndex = index;
            var currentItem = element;
            _.each(items, function(item, index){
                if (item.used == true) return;
                if (item.position == itemIndex+1) {
                    item.position = parseInt($('.input-spinner', currentItem).html());
                    item.used = true;
                }
            });
        });
        for (var i=1; i < this.itemLength+1; i++) {
            $('.input-spinner:contains('+i+')', this.el).closest('.item').appendTo($('.items', this.el));
        }
    },

    submit: function(event) {
        event.preventDefault();
        if (!this.model.get('previewed')) {
            alert(this.model.get('submitError'));
            return;
        }
        this.model.set({submitted: true, attempts: this.model.get('attempts')-1});
        if (this.model.get('attempts')==0) {
            this.model.set({complete:true});
            $('.widget', this.el).addClass('complete');
        }
        $('.input-spinner', this.el).addClass('disabled');
        this.markItems();
        new TutorModel({
            title: this.model.get('title'), 
            message:this.model.get('tutorMessage'),
            audio: this.model.get('feedback').audio
        });
        if (!this.model.get('correct')&&!this.model.get('complete')) {
            $('.reset', this.el).css('display','inline-block');
            $('.submit, .preview', this.el).hide();
        }
        if (!this.model.get('correct')&&this.model.get('complete')) {
            $('.model', this.el).css('display','inline-block');
            $('.submit, .preview', this.el).hide();
        }
    },

    markItems: function() {
        var that = this;
        _.each(that.model.get('items'), function(item) {
            var $currentItem = $('.item', that.el).eq(item.position-1);
            if (item.index == item.position) {
                that.model.set('score', that.model.get('score')+1);
                item.correct = true;
                $currentItem.addClass('correct');
            } else {
                item.correct = false;
                $currentItem.addClass('incorrect');
            }
        });
        if (this.model.get('score') == this.itemLength) {
            this.model.set('tutorMessage', this.model.get('feedback').correct);
            $('.widget', this.el).addClass('correct complete');
            this.model.set({correct: true,complete:true});
        } else if (this.model.get('score') > 0) {
            this.model.set('tutorMessage', this.model.get('feedback').partly[Math.ceil(this.model.get('attempts')/10)]);
            $('.widget', this.el).addClass('incorrect');
            this.model.set('correct', false);
        } else {
            this.model.set('tutorMessage', this.model.get('feedback').incorrect[Math.ceil(this.model.get('attempts')/10)]);
            $('.widget', this.el).addClass('incorrect');
            this.model.set('correct', false);
        }
    },
    
    reset: function(event) {
        event.preventDefault();
        this.model.set({submitted:false, score:0, previewed:false});
        $('.preview, .submit', this.el).css('display','inline-block');
        $('.reset', this.el).hide();
        $('.input-spinner', this.el).removeClass('disabled');
        $('.item', this.el).removeClass('incorrect correct');
        $('.widget', this.el).removeClass('incorrect correct complete');
        _.each(this.model.get('items'), function(item, index){
            item.used = false;
        });
    },
    
    modelAnswer: function(event) {
        if(event) event.preventDefault();
        var that = this;
        var items = this.model.get('items');
        _.each(items, function(item, index){
            item.used = false;
        });
        var indexes = [];
        var positions = [];
        for (var i=1; i < this.itemLength+1; i++) {
            _.each(items, function(item, index){
                if (item.used == true) return;
                if (item.index == i) {
                    indexes.push(item.index);
                    positions.push(item.position);
                    item.used = true;
                }
            });
        }
        _.each(positions, function(item){
            $('.input-spinner:contains('+item+')', that.el).closest('.item').appendTo($('.items', that.el));
        });
        $('.input-spinner', this.el).each(function(index){
            $(this).html(index+1);
        })
        $('.button.mine', this.$el).css('display','inline-block');
        $('.model', this.$el).css('display','none');
        $('.widget', this.$el).removeClass('mine').addClass('model').css('display','block');
    },
    
    myAnswer: function(event) {
        if(event) event.preventDefault();
        var that = this;
        var items = this.model.get('items');
        _.each(items, function(item, index){
            item.used = false;
        });
        var indexes = [];
        var positions = [];
        for (var i=1; i < this.itemLength+1; i++) {
            _.each(items, function(item, index){
                if (item.used == true) return;
                if (item.index == i) {
                    indexes.push(item.index);
                    positions.push(item.position);
                    item.used = true;
                }
            });
        }
        $('.input-spinner', this.el).each(function(index){
            $(this).html(positions[index]);
        })
        _.each(indexes, function(item){
            $('.input-spinner:contains('+item+')', that.el).closest('.item').appendTo($('.items', that.el));
        });
        $('.widget', this.$el).removeClass('model').addClass('mine');
        $('.button.mine', this.$el).css('display','none');
        $('.model', this.$el).css('display','inline-block');
    }
    
});
