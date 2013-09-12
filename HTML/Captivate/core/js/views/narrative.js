Adapt.narrative = ComponentView.extend({
    tagName: "div",
    className: "component narrative clearfix",
    init: function () {
        this.template = 'narrative'
        this.listenTo(Adapt.Manager.model, 'change:screenSize', this.setupLayout, this);
        this.listenTo(Adapt.Manager.model, 'change:device', this.reRender, this);
    },
    events: function () {
        return Adapt.Manager.model.get('touch') == true ? {
            'touchstart .slider':'navigateTouch',
            'touchstart .strapline .open':'openNarrative',
            'click .toolbar .close':'closeNarrative'
        }:{
            'click .controls':'navigateClick',
            'click .strapline .open':'openNarrative',
            'click .toolbar .close':'closeNarrative'
        }
    },
    reRender: function() {
        if (this.model.get('component')=='hotgraphic' && (Adapt.Manager.model.get('screenSize') >= 700 )) {
            new Adapt.hotgraphic({model:this.model, $parent:this.$parent}).render();
            this.remove();
        } else {
            this.preRender();
            this.render();
            this.delegateEvents();
        }
    },
    preRender: function () {
        if ($(window).width() > 699) {
            this.model.set('mobile', false);
        } else {
            this.model.set('mobile', true);
        }
        
        if ((Adapt.Manager.model.get('touch')==false)) {
            this.model.set('navigate',true);
        }
    },
    setup:function(){
        var that = this;
        if ($(window).width() > 799) this.$el.addClass('desktop')
        else this.$el.addClass('mobile');
        this.$el.addClass('desktop');
        $('.widget', this.$el).imageready(function(){
            that.setupLayout();
            that.model.set('ready', true);
        })
    },
    setupLayout: function () {
        var slideWidth = $('.slide', this.$el).width(),
            graphicLength = $('.graphic', this.$el).length,
            extraMargin = parseInt($('.graphic', this.$el).css('margin-right'));
        this.model.set('stage',0);
        $('.widget .content .item', this.$el).hide().first().show();
        $('.slider', this.$el).css('margin-left',0);
        $('.strapline .header > .inner', this.$el).css('margin-left',0);
        if (!Adapt.Manager.model.get('touch')) {
            this.model.set('navigate',true);
        }
        this.model.set('active', true);
        $('.slider .graphic', this.$el).width(slideWidth)
        $('.slider', this.$el).width((slideWidth+extraMargin)*graphicLength);
        $('.progress',this.$el).removeClass('selected').first().addClass('selected');
        $('.header', this.$el).width(slideWidth-$('.strapline .controls', this.$el).width());
        $('.header .title', this.$el).width($('.header', this.$el).width());
        $('.header > .inner', this.$el).width($('.header .title', this.$el).width()*$('.header .title', this.$el).length);
        $('.graphic', this.$el).first().children('.controls').attr('tabindex',0);
        if ($(window).width() > 699) {
            $(this.el).removeClass('mobile').addClass('desktop');
            $('.widget .graphic', this.$el).first().addClass('visited');
        } else {
            $(this.el).removeClass('desktop').addClass('mobile');
        }
        return this;
    },
    
    navigateClick: function (event) {
        event.preventDefault();
        if (!this.model.get('active'))
            return;
        var extraMargin = parseInt($('.graphic', this.$el).css('margin-right')),
            movementSize = $('.slide', this.$el).width()+extraMargin,
            narrativeSize = $('.graphic', this.$el).length,
            strapLineSize = $('.strapline .title', this.$el).width(),
            stage = this.model.get('stage');
        if ($(event.currentTarget).hasClass('right')) {
            if (stage < narrativeSize-1) {
                stage ++;
                $('.slider', this.$el).stop().animate({'margin-left': -(movementSize*stage)});
                $('.strapline .header > .inner', this.$el).stop(true, true).delay(400).animate({'margin-left': -(strapLineSize*stage)});
                if (!this.model.get('mobile')) {
                    $('.widget .graphic', this.$el).eq(stage).addClass('visited');
                    if ($('.visited', this.$el).length == $('.slider .graphic', this.$el).length) {
                        this.model.set('complete', true);   
                    }
                }
            } else {
                stage = 0;
                $('.slider', this.$el).stop().animate({'margin-left': -(movementSize*stage)});
                $('.strapline .header > .inner', this.$el).delay(400).animate({'margin-left': -(strapLineSize*stage)});
            }
        }
        if ($(event.currentTarget).hasClass('left')) {
            if (stage > 0) {
                stage --;
                $('.slider', this.$el).stop().animate({'margin-left': -(movementSize*stage)});
                $('.strapline .header > .inner', this.$el).stop(true, true).delay(400).animate({'margin-left': -(strapLineSize*stage)});
            }
        }
        this.model.set('stage', stage);
        $('.progress', this.$el).removeClass('selected').eq(stage).addClass('selected');
        $('.graphic', this.$el).children('.controls').attr('tabindex',-1);
        $('.graphic', this.$el).eq(stage).children('.controls').attr('tabindex',0);
        $('.widget .content .item', this.$el).hide();
        $('.widget .content .item', this.$el).eq(stage).show()
    },
    navigateTouch: function (event) {
        event.preventDefault();
        if (!this.model.get('active'))
            return;
        var that = this,
            xOrigPos = event.originalEvent.touches[0]['pageX'],
            startPos = parseInt($('.slider', this.$el).css('margin-left')),
            xPos = event.originalEvent.touches[0]['pageX'],
            stage = this.model.get('stage'),
            extraMargin = parseInt($('.graphic', this.$el).css('margin-right')),
            movementSize = $('.slide', this.$el).width()+extraMargin,
            narrativeSize = $('.graphic', this.$el).length,
            strapLineSize = $('.strapline .title', this.$el).width(),
            move;
        $('.slider', this.$el).on('touchmove', function (event) {
            event.preventDefault();
            xPos = event.originalEvent.touches[0]['pageX'];
            if (xPos < xOrigPos) {
                if (stage < narrativeSize-1) {
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
            $('.slider', that.$el).css('margin-left', move);
        });
        $('.slider', this.$el).one('touchend', function (event) {
            $('.slider', that.$el).unbind('touchmove');
            if (xPos < xOrigPos) {
                if (stage < narrativeSize-1) {
                    stage ++;
                    $('.slider', that.$el).animate({'margin-left': -(movementSize*stage)});   
                    $('.strapline .header > .inner', that.$el).animate({'margin-left': -(strapLineSize*stage)});
                } else {
                    $('.slider', that.$el).animate({'margin-left': -(movementSize*stage)},400,'easeOutBack');
                }
            }
            if (xPos > xOrigPos) {
                if (stage > 0) {
                    stage --;
                    $('.slider', that.$el).animate({'margin-left': -(movementSize*stage)});
                    $('.strapline .header > .inner', that.$el).animate({'margin-left': -(strapLineSize*stage)});
                } else {
                    $('.slider', that.$el).animate({'margin-left': -(movementSize*stage)},400,'easeOutBack');
                }
            }
            that.model.set({'stage':stage});
            $('.widget .content .item', that.$el).hide();
            $('.widget .content .item', that.$el).eq(stage).show();
            $('.progress', that.$el).removeClass('selected').eq(stage).addClass('selected');
            
        });
    },
    openNarrative: function (event) {
        event.preventDefault();
        this.model.set('active',false);
        var outerMargin = parseFloat($('.popup > .inner',this.$el).css('margin')),
            innerPadding = parseFloat($('.popup > .inner',this.$el).css('padding')),
            toolBarHeight = $('.popup > .inner .toolbar', this.$el).height();
        $('.slider .graphic', this.$el).eq(this.model.get('stage')).addClass('visited');
        $('.popup .toolbar .title', this.$el).hide();
        $('.popup .toolbar .title', this.$el).eq(this.model.get('stage')).show();
        $('.popup .content', this.$el).hide();
        $('.popup .content', this.$el).eq(this.model.get('stage')).show();
        $('.popup > .inner',this.$el).css('height', $(window).height()-(outerMargin*2)-(innerPadding*2));
        $('.popup', this.$el).show();
        $('.popup .content', this.$el).css('height', ($('.popup > .inner', this.$el).height()-toolBarHeight))
        //$('.popup .toolbar .close').focus();
        if ($('.visited', this.$el).length == $('.slider .graphic', this.$el).length) {
            this.model.set('complete', true);
        }
    },
    closeNarrative: function (event) {
        event.preventDefault();
        var $currentElement = $('.widget', this.$el);
        $('.popup .toolbar .close').blur();
        $('.popup', this.$el).hide();
        this.model.set('active',true);
        $('.slide .controls .left').focus();
        /*$.scrollTo($currentElement,0,{
            offset:{top:-50}
        });*/
    }
});

