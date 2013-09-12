var ArticleView = ContentView.extend({
    tagName: 'div',
    className: 'article',
    init: function () {
        if(!this.model.get('blockSlider')) this.model.set('blockSlider', {});
        if (this.model.get('blockSlider').active) {
            this.listenTo(Adapt.Manager.model, 'change:screenSize', this.blockSliderSetup);
            this.listenTo(Adapt, 'page:ready', this.blockSliderSetup);
            
        }
    },
    
    events: function() {
        if (this.model.get('blockSlider').active && !this.model.get('blockSlider').tabs) {
            return {
                'click .block-slider-controls .left':'blockSlideLeft',
                'click .block-slider-controls .right':'blockSlideRight',
                'click .indicator':'selectIndicator'
            };
        }
        if (this.model.get('blockSlider').active && this.model.get('blockSlider').tabs) {
            return {
                'click .tab':'selectTab',
                'click .indicator':'selectIndicator'
            };
        }
        
        
    },
    
    setup : function () {
    },
    
    addChildren: function () {
        var parent = this.$el.children('.inner');
        if (this.model.get('blockSlider').active) {
            parent = $('.block-slider > .inner', this.el);
        }
        _.each(this.model.get('blocks').models, function (model){
            new BlockView({model:model, $parent:parent});
        });
        
        
        if (this.model.get('blockSlider').active) {
            this.blockSliderSetup();
            this.model.set('stage',0);
        }
    },
    
    selectTab: function(event) {
        event.preventDefault();
        var currentIndex = $(event.currentTarget).index();
        var length = this.model.get('blocks').length;
        if (this.model.get('blockSlider').direction == 'both') {
            var slideAmount = $('.block', this.$el).width();
            $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(currentIndex))});
            $('.tab', this.el).removeClass('selected').eq(currentIndex).addClass('selected');
            if (this.model.get('blockSlider').indicators) $('.indicator', this.el).removeClass('selected').eq(currentIndex).addClass('selected');
            this.model.set('stage', currentIndex);
        }
    },
    
    selectIndicator: function(event) {
        event.preventDefault();
        var currentIndex = $(event.currentTarget).index();
        var length = this.model.get('blocks').length;
        if (this.model.get('blockSlider').direction == 'both') {
            var slideAmount = $('.block', this.$el).width();
            $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(currentIndex))});
            $('.indicator', this.el).removeClass('selected').eq(currentIndex).addClass('selected');
            if (this.model.get('blockSlider').tabs) $('.tab', this.el).removeClass('selected').eq(currentIndex).addClass('selected');
            this.model.set('stage', currentIndex);
            if (currentIndex == length-1) {
                $('.block-slider-controls .right', this.el).hide();
                $('.block-slider-controls .left', this.el).css('display','block');
            } else if (currentIndex == 0) {
                $('.block-slider-controls .left', this.el).hide();
                $('.block-slider-controls .right', this.el).css('display','block');
            } else {
                $('.block-slider-controls .left, .block-slider-controls .right', this.el).css('display','block');
            }
        }
    },
    
    /*blockToUnlockSetup: function () {
        var currentArticle = this.model.get('article');
        var blockToUnlock = this.model.get('blockToUnlock');
        var blockToUnlockID = Adapt.Components.where({
            module:this.model.get('module'), 
            topic:this.model.get('topic'), 
            page:this.model.get('page'), 
            article:this.model.get('article'),
            block:blockToUnlock
        });
        this.listenTo(blockToUnlockID[0], 'change:complete', this.blockSliderUnlocked, this);
        this.$el.next().addClass('block-slider-locked');
    },
    blockSliderUnlocked: function (model, value, options) {
        var currentArticle = this.model.get('article');
        this.$el.next().removeClass('block-slider-locked');
    },*/
    
    blockSliderSetup: function () {
        this.$el.addClass('block-slider-container');
        var that = this;
        var direction = this.model.get('blockSlider').direction;
        var initialBlock = this.model.get('blockSlider').initial;
        var length = this.model.get('blocks').length;
        if (direction == 'left') {
            $('.block-slider-controls .left', this.$el).css('display', 'block');
        }
        if (direction == 'right') {
            $('.block-slider-controls .right', this.$el).css('display', 'block');
        }
        if (direction == 'both') {
            if (initialBlock == 1) {
                $('.block-slider-controls .left', this.$el).hide();
                $('.block-slider-controls .right', this.$el).css('display', 'block');
            } else if (initialBlock == length) {
                $('.block-slider-controls .right', this.$el).hide();
                $('.block-slider-controls .left', this.$el).css('display', 'block');
            } else {
                $('.block-slider-controls .left', this.$el).css('display', 'block');
                $('.block-slider-controls .right', this.$el).css('display', 'block');
            }
        }
        var blockSliderWidth = $('.block-slider', this.el).width();
        $('.block', this.el).width(blockSliderWidth)
        var initialBlock = this.model.get('blockSlider').initial-1;
        this.model.set('stage',initialBlock);
        if (this.model.get('blockSlider').tabs) $('.tab', this.el).removeClass('selected').eq(initialBlock).addClass('selected');
        if (this.model.get('blockSlider').indicators) $('.indicator', this.el).removeClass('selected').eq(initialBlock).addClass('selected')
        if (Adapt.Manager.model.get('screenSize') > 900 && this.model.get('blockSlider').height != 'auto') {
            $('.block', this.$el).height(this.model.get('blockSlider').height);
        } else {
            $('.block', this.$el).height('auto');
        }
        $('.block-slider > .inner', this.el).width((this.model.get('blocks').length*blockSliderWidth));
        var slideAmount = $('.block', this.$el).width();
        $('.block-slider > .inner', this.el).css({'margin-left':-((slideAmount*(initialBlock)))});
    },
    
    blockSlideLeft: function(event) {
        event.preventDefault();
        var stage = this.model.get('stage');
        var length = this.model.get('blocks').length;
        var direction =  this.model.get('blockSlider').direction;
        var slideAmount = $('.block', this.$el).width();
        if (direction == 'both') {
            if (stage > 1) {
                $('.block-slider-controls .right', this.el).css('display','block');
            } else {
                $('.block-slider-controls .left', this.el).hide();
            }
            if (stage > 0) {
                $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(stage-1))});
                $('.indicator', this.el).removeClass('selected').eq(this.model.get('stage')-1).addClass('selected');
                this.model.set('stage', this.model.get('stage')-1);
            }
            if (stage < length) {
                $('.block-slider .right', this.$el).css('display','block');
            }
        }
        if (direction == 'left') {
            if (stage > 0) {
                $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(stage-1))});
                $('.indicator', this.el).removeClass('selected').eq(this.model.get('stage')-1).addClass('selected');
                this.model.set('stage', this.model.get('stage')-1);
            }
            console.log(stage)
            if (stage == 1) {
                $('.block-slider-controls .left', this.$el).hide();
            }
        }
        
    },
    
    blockSlideRight: function(event) {
        event.preventDefault();
        var stage = this.model.get('stage');
        var length = this.model.get('blocks').length;
        var direction =  this.model.get('blockSlider').direction;
        var slideAmount = $('.block', this.el).width();
        if (direction == 'both') {
            if (stage < length-2) {
                $('.block-slider-controls .right', this.el).css('display','block');
            } else {
                $('.block-slider-controls .right', this.el).hide();
            }
            if (stage < length-1) {
                $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(stage+1))});
                $('.indicator', this.el).removeClass('selected').eq(this.model.get('stage')+1).addClass('selected');
                this.model.set('stage', this.model.get('stage')+1);
            }
            if (stage == 0) {
                $('.block-slider-controls .left', this.$el).css('display','block');
            }
        }
        if (direction == 'right') {
            if (stage < length-1) {
                $('.block-slider > .inner', this.el).stop().animate({'margin-left':-(slideAmount*(stage+1))});
                $('.indicator', this.el).removeClass('selected').eq(this.model.get('stage')+1).addClass('selected');
                this.model.set('stage', this.model.get('stage')+1);
            }
            if (stage > length-3) {
                $('.block-slider-controls .right', this.el).hide();
            }
        }
    }
});