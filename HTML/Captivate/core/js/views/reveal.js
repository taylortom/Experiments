Adapt.reveal = ComponentView.extend({
    tagName: "div",
    className: "component reveal",
    init: function () {
        this.listenTo(Adapt.Manager.model, 'change:screenSize', this.resize, this);
    },
    events: function () {
        return Adapt.Manager.model.get('touch')==false ? {
            'click .handle':'clickReveal',
            'focus .handle':'focusReveal'//,
            //'mousedown .handle':'navigateMouse'
        }:{
            //'touchstart .handle':'navigateTouch',
            'touchstart .handle':'clickReveal'
        }
        
    },
    setup: function () {
        var that = this;
        $('.widget', this.$el).imageready(function(){
            that.model.set('ready', true);
        });
    },
    
    resize: function() {
        $('.handle', this.el).css('left',0).removeClass('revealed');
        $('.graphic', this.$el).css('width',0);
    },
    
    clickReveal:function (event) {
        event.preventDefault();
        var that = this;
        var $handle = $('.handle', that.el);
        var $graphic = $('.graphic', that.$el);
        var revealWidth = $('.widget', that.$el).width();
        var maxWidth = revealWidth-$handle.outerWidth();
        $graphic.height($('.reveal img', that.$el).height());
        if(!$handle.hasClass('revealed')) {
            $('.graphic img', that.$el).css('max-width',$('.reveal img', that.$el).width());
            $handle.animate({'left': maxWidth}, 600);
            $graphic.animate({'width': maxWidth}, 600);
            $handle.addClass('revealed');
        } else if($handle.hasClass('revealed')) {
            $handle.animate({'left': 0}, 600);
            $graphic.animate({'width': 0}, 600);
            $handle.removeClass('revealed');
        }
    },
    focusReveal:function (event) {
        event.preventDefault();
        var that = this;
        var $handle = $('.handle', that.el);
        var $graphic = $('.graphic', that.$el);
        var revealWidth = $('.widget', that.$el).width();
        var maxWidth = revealWidth-$handle.outerWidth();
        $handle.on('keydown', function(event) {
            $graphic.height($('.reveal img', that.$el).height());
            $('.graphic img', that.$el).css('max-width',$('.reveal img', that.$el).width());
            if (event.keyCode == 39) {
                $handle.stop().animate({'left': maxWidth}, 600);
                $graphic.stop().animate({'width': maxWidth}, 600); 
            } else if (event.keyCode == 37) {
                $handle.stop().animate({'left': 0}, 600);
                $graphic.stop().animate({'width': 0}, 600);    
            }
        });
    },
    navigateMouse: function (event) {
        event.preventDefault();
        $('.graphic', this.$el).height($('.reveal img', this.$el).height());
        $('.graphic img', this.$el).css('max-width',$('.reveal img', this.$el).width());
        var that = this;
        var $handle = $('.handle', that.el);
        var origPosX = event.pageX;
        var startPosX = parseInt($handle.css('left'));
        var xPos = event.pageX;
        var revealWidth = $('.widget', this.$el).width();
        $(document).on('mousemove', function (event) {
            xPos = event.pageX;
            if (parseInt($handle.css('left')) >= 0 && parseInt($handle.css('left')) <= revealWidth-$handle.outerWidth() ) {
                var changePosX = (xPos + startPosX) - origPosX;
                $handle.stop().css('left', changePosX);
                $('.graphic', that.el).width($handle.stop().css('left'));
            }
        });
        $(document).one('mouseup', function (event) {
            $(document).off('mousemove');
            if (parseInt($handle.css('left'))<=0) {
                $handle.css({'left':0});
                return
            }
            if (parseInt($handle.css('left')) > revealWidth/2) {
                that.model.set('complete',true);
                $handle.animate({'left':revealWidth-$handle.outerWidth()}, 600, 'easeOutBounce');
                $('.graphic', that.el).stop().animate({'width': revealWidth-$handle.outerWidth()}, 600, 'easeOutBounce');
            } else {
                $handle.animate({'left':0}, 600, 'easeOutBounce');
                $('.graphic', that.el).stop().animate({'width': 0}, 600, 'easeOutBounce');
            }
        });
    },
    navigateTouch: function (event) {
        event.preventDefault();
        $('.graphic', this.$el).height($('.reveal img', this.$el).height());
        $('.graphic img', this.$el).css('max-width',$('.reveal img', this.$el).width());
        var that = this;
        var $handle = $('.handle', that.el);
        var origPosX = event.originalEvent.touches[0].pageX;
        var startPosX = parseInt($handle.css('left'));
        var xPos = event.originalEvent.touches[0].pageX;
        var revealWidth = $('.widget', this.$el).width();
        $('.handle', that.el).on('touchmove', function (event) {
            xPos = event.originalEvent.touches[0].pageX;
            if (parseInt($handle.css('left')) >= 0 && parseInt($handle.css('left')) <= revealWidth-$handle.outerWidth() ) {
                var changePosX = (xPos + startPosX) - origPosX;
                $handle.stop().css('left', changePosX);
                $('.graphic', that.el).width($handle.stop().css('left'));
            }
        });
        $('.handle', that.el).one('touchend', function (event) {
            $('.handle', that.el).off('touchmove');
            if (parseInt($handle.css('left'))<=0) {
                $handle.css({'left':0});
                return
            }
            
            if (parseInt($handle.css('left')) > revealWidth/2) {
                $handle.animate({'left':revealWidth-$handle.outerWidth()}, 600, 'easeOutBounce');
                $('.graphic', that.el).stop().animate({'width': revealWidth-$handle.outerWidth()}, 600, 'easeOutBounce');
            } else {
                $handle.animate({'left':0}, 600, 'easeOutBounce');
                $('.graphic', that.el).stop().animate({'width': 0}, 600, 'easeOutBounce');
            }
        });
    }
});