var GuideView = Backbone.View.extend({
    tagName: 'div',
    className: 'item',
    initialize: function () {
        if(this.model.get('device') === 'all')
            $('#guide .scroll').append(this.el);
        else if(this.model.get('device') === 'desktop' && Adapt.Manager.model.get('screenSize') > 900)
            $('#guide .scroll').append(this.el);
        else if(this.model.get('device') === 'mobile' && Adapt.Manager.model.get('screenSize') < 699)
            $('#guide .scroll').append(this.el);
    },
    render: function () {
        var data = this.model.toJSON();
        var template = Handlebars.templates["guide"];
        this.$el.html(template(data));
        return this;
    }
});

var GuidesView = Backbone.View.extend({
    el: '#guide',
    initialize: function () {
        this.stage = 0;
        this.collection.on('add', this.render, this);
        this.listenTo(Adapt.Manager.model, 'change:screenSize', this.setupScreenChange, this);
    },
    events: function () {
        return Adapt.Manager.model.get('touch')==false ? {
            'click .right':'navigateRight',
            'click .left':'navigateLeft',
            'click .done':'done',
            'click .toggle':'toggleGuide'
        }:{
            'touchstart':'navigateTouch',
            'click .done':'done',
            'click .toggle':'toggleGuide'
        }
    },
    setup: function () {
        $('.progress', this.$el).removeClass('selected');
        $('.progress', this.$el).first().addClass('selected');
        $('.item', this.$el).show().css('opacity',0);
        var itemWidth = $('#guide').width()-(parseInt($('#guide > .inner').css('padding-right'))*2);
        var itemLength = $('.item', this.$el).length;
        $('.scroll', this.el).width(itemWidth * itemLength);
        $('.item', this.el).width(itemWidth).first().stop().animate({'opacity':1}, '500');
        this.stage = 0;
        $('.scroll', this.el).css('margin-left',this.stage);
        $('#shadow').fadeIn('fast',function () {
            $('#guide').fadeIn('slow');
            $('#guide .right').focus();
        });
    },
    setupScreenChange: function () {
        $('.progress', this.$el).removeClass('selected');
        $('.progress', this.$el).first().addClass('selected');
        var itemWidth = $('#guide').width()-(parseInt($('#guide > .inner').css('padding-right'))*2);
        var itemLength = $('.item', this.$el).length;
        $('.scroll', this.$el).width(itemWidth * itemLength);
        $('.item', this.$el).width(itemWidth).first().stop().animate({'opacity':1}, '500');
        this.stage = 0;
        $('.scroll', this.$el).css('margin-left',this.stage);
    },
    renderAdapt: function () {
        if ((Adapt.Manager.model.get('touch')==false)) {
            this.model.set('navigate',true);
        }
        $('#shadow').fadeIn('slow');
        var $that = this;
        var filter = this.collection.where({type:"adapt"});
        this.model.set({'length': filter, 'adapt':true});
        var data = this.model.toJSON();
        var template = Handlebars.templates["guide-view"];
        $(this.el).html(template(data)).hide();
        _.each(filter, function (item) {
            var itemView = new GuideView({
                model:item
            });
            $('.scroll', $that.$el).append(itemView.render().el);
        });
        this.setup();
        return this;
    },
    renderComponents: function () {
        if ((Adapt.Manager.model.get('touch')==false)) {
            this.model.set('navigate',true);
        }
        var $that = this;
        var filter = this.collection.where({type:"component"});
        this.model.set({'length': filter, 'adapt':false});
        var data = this.model.toJSON();
        var template = Handlebars.compile($("#guide-view-template").html());
        $(this.el).html(template(data));
        _.each(filter, function (item) {
            var itemView = new GuideView({
                model:item
            });
            $('.scroll', $that.$el).append(itemView.render().el);
        });
        this.setup();
        return this;
    },
    navigateRight: function (event) {
        event.preventDefault();
        var $that = this;
        var itemWidth = $('.item', this.$el).first().width();
        var itemLength = $('.item', this.$el).length;
        var stage = this.stage;
        if (stage < itemLength-1) {
            $('.scroll', this.$el).stop().animate({'margin-left': (stage+1) * -(itemWidth)},1000);
            $('.item', this.$el).eq(stage).stop().animate({'opacity':0}, 800);
            $('.item', this.$el).eq(stage+1).stop().animate({'opacity':1}, 500);
            this.stage ++;
        } else {
            $('.scroll', this.$el).stop().animate({'margin-left': (0) * -(itemWidth)},1000);
            $('.item', this.$el).eq(stage).stop().animate({'opacity':0}, 800);
            $('.item', this.$el).eq(0).stop().animate({'opacity':1}, 500);
            this.stage = 0;
        }
        $that.updateProgress($that);
        if (stage == itemLength-2) {
            $('.toggle', this.$el).fadeIn('fast');
        } else {
            $('.toggle', this.$el).fadeOut('fast');
        }
        return this;
    },
    navigateLeft: function (event) {
        event.preventDefault();
        var $that = this;
        var itemWidth = $('.item', this.$el).first().width();
        var itemLength = $('.item', this.$el).length;
        var stage = this.stage;
        if (stage > 0) {
            $('.scroll', this.$el).stop().animate({'margin-left': (stage-1) * -(itemWidth)},1000);
            $('.item', this.$el).eq(stage).stop().animate({'opacity':0}, 800);
            $('.item', this.$el).eq(stage-1).stop().animate({'opacity':1}, 500);
            this.stage --;
        } else {
            $('.scroll', this.$el).stop().animate({'margin-left': (itemLength-1) * -(itemWidth)},1000);
            $('.item', this.$el).eq(0).stop().animate({'opacity':0}, 800);
            $('.item', this.$el).eq(itemLength-1).stop().animate({'opacity':1}, 500);
            this.stage = itemLength-1;
        }
        $that.updateProgress($that);
        if (this.stage == itemLength-1) {
            $('.toggle', this.$el).fadeIn('fast');
        } else {
            $('.toggle', this.$el).fadeOut('fast');
        }
        return this;
    },
    navigateTouch: function (event) {
        var $that = this;
        var xOrigPos = event.originalEvent.touches[0].pageX;
        var startPos = parseInt($('.scroll', this.$el).css('margin-left'));
        var xPos = event.originalEvent.touches[0].pageX;
        var move;
        var stage = this.stage;
        var movementSize = $('.item', this.$el).width();
        var itemLength = $('.item', this.$el).length;
        $('.scroll', this.$el).on('touchmove', function (event) {
            event.preventDefault();
            xPos = event.originalEvent.touches[0].pageX;
            if (xPos < xOrigPos) {
                if (stage < itemLength-1) {
                    move = (xPos + startPos) - xOrigPos;
                } else {
                    move = (xPos - xOrigPos)/4 + (startPos);
                }
            }
            if (xPos > xOrigPos) {
                if (stage > 0) {
                    move = (xPos + startPos) - xOrigPos;
                } else {
                    move = (xPos - xOrigPos)/4 + (startPos);
                }
            }
            $('.scroll', $that.$el).css('margin-left', move);
        });
        $('.scroll', this.$el).one('touchend', function (event) {
            $('.scroll', $that.$el).unbind('touchmove');
            if (xPos < xOrigPos) {
                if (stage < itemLength-1) {
                    $('.item', $that.$el).eq(stage).stop().animate({'opacity':0}, 800);
                    $('.item', $that.$el).eq(stage+1).stop().animate({'opacity':1}, 500);
                    stage ++;
                    $('.scroll', $that.$el).animate({'margin-left': -(movementSize*stage)});  
                    if ($that.stage == itemLength-2) {
                        $('.toggle', $that.$el).fadeIn('fast');
                    } else {
                        $('.toggle', $that.$el).fadeOut('fast');
                    }
                } else {
                    $('.scroll', $that.$el).animate({'margin-left': -(movementSize*stage)},400,'easeOutBack');
                }
            }
            if (xPos > xOrigPos) {
                if (stage > 0) {
                    $('.item', $that.$el).eq(stage).stop().animate({'opacity':0}, 800);
                    $('.item', $that.$el).eq(stage-1).stop().animate({'opacity':1}, 500);
                    stage --;
                    $('.scroll', $that.$el).animate({'margin-left': -(movementSize*stage)});
                    $('.toggle', $that.$el).fadeOut('fast');
                } else {
                    $('.scroll', $that.$el).animate({'margin-left': -(movementSize*stage)},400,'easeOutBack');
                }
            }
            $that.stage = stage;
            $('.progress', $that.$el).removeClass('selected').eq(stage).addClass('selected');
        });
    },
    updateProgress: function () {
        var stage = this.stage;
        $('.progress', this.$el).removeClass('selected');
        $('.progress', this.$el).eq(stage).addClass('selected');
    },
    toggleGuide: function (event) {
        event.preventDefault();
        if (this.model.get('adapt')) {
            this.renderComponents();
        } else {
            this.renderAdapt();
        }
    },
    done: function (event) {
        event.preventDefault();
        this.$el.hide();
        $('#navigation a').first().focus();
        $('#shadow').fadeOut('slow');
    }
});