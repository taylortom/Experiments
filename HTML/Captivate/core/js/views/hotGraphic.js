
Adapt.hotgraphic = ComponentView.extend ({
    tagName: "div",
    className: "component hotgraphic",
    init:function () {
        this.$currentItem;
        this.listenTo(Adapt.Manager.model, 'change:device', this.reRender, this); 
    },
    events: function () {
        return Adapt.Manager.model.get('touch')==false ? {
            'click .item':'openHotGraphic',
            'click .toolbar .done':'closeHotGraphic',
            'click .nav .back':'previousHotGraphic',
            'click .nav .next':'nextHotGraphic'
        }:{
            'click .item':'openHotGraphic',
            'click .toolbar .done':'closeHotGraphic',
            'click .nav .back':'previousHotGraphic',
            'click .nav .next':'nextHotGraphic',
            'touchstart .popup > .inner':'swipeHotGraphic'
        }
    },
    reRender: function() {
        if ($(window).width() < 700 ) {
            new Adapt.narrative({model:this.model, $parent:this.$parent}).reRender();
            this.remove();
        }
    },
    setup: function () {
        var that = this;
        if (Adapt.Manager.model.get('touch')==true) {
            this.model.set('touch',true);
        } else {
            this.model.set('touch',false);
        }
        this.$el.addClass('desktop');
        $('.widget', this.$el).imageready(function(){
            that.model.set('ready', true);
        })
        return this;
    },
    openHotGraphic: function (event) {
        event.preventDefault();
        this.$currentItem = $(event.currentTarget);
        var currentHotSpot = $(event.currentTarget).addClass('visited').data('id');
        $('.popup .content', this.$el).hide().removeClass('active');
        $('.'+currentHotSpot, this.$el).show().addClass('active');
        var currentIndex = $('.content.active', this.$el).index();
        $('.count .current', this.$el).html(currentIndex+1);
        $('.count .total', this.$el).html($('.content', this.$el).length);
        if (Adapt.Manager.model.get('screenSize') < 699 ) {
            var currentHeight = $(window).height()-$('#navigation').height()-8;
            $('.popup > .inner',this.$el).css('height',$(window).height()-$('#navigation').height()-8);
            $('.popup .inner .graphic',this.$el).height(currentHeight/2);
            $('.popup .inner .body',this.$el).height((currentHeight/2)-8);
        }
        $('.popup', this.$el).show();
        $('.popup a.next', this.$el).focus();
        if ($('.visited', this.$el).length == $('.item', this.$el).length) {
            this.model.set('complete',true);
        }
    },
    closeHotGraphic: function (event) {
        event.preventDefault();
        var currentIndex = $('.content.active', this.$el).index();
        $('.popup', this.$el).hide();
        // return focus to active item hotspot
        $( '.widget a.item', this.$el).eq(currentIndex).focus();
    },
    swipeHotGraphic:function(event){
        event.preventDefault();
        var $that = this,x = event.originalEvent.touches[0].pageX, X;
        $('.popup > .inner', this.$el).one('touchmove', function (event) {
            event.preventDefault();
            X = event.originalEvent.touches[0].pageX;
            if (X < x) $that.nextHotGraphic();
            else $that.previousHotGraphic();
        });
    },
    previousHotGraphic: function (event) {
        event.preventDefault();
        var currentIndex = $('.content.active', this.$el).index();
        if (currentIndex > 0) {
            $('.content.active', this.$el).hide().removeClass('active');
            $('.content', this.$el).eq(currentIndex-1).show().addClass('active');
            $('.item', this.$el).eq(currentIndex-1).addClass('visited');
            $('.count .current', this.$el).html(currentIndex);
            if ($('.visited', this.$el).length == $('.item', this.$el).length) {
                this.model.set('complete',true);
            }
        }
    },
    nextHotGraphic: function (event) {
        event.preventDefault();
        var currentIndex = $('.content.active', this.$el).index();
        if (currentIndex < ($('.content', this.$el).length-1)) {
            $('.content.active', this.$el).hide().removeClass('active');
            $('.content', this.$el).eq(currentIndex+1).show().addClass('active');
            $('.item', this.$el).eq(currentIndex+1).addClass('visited');
            $('.count .current', this.$el).html(currentIndex+2);
            if ($('.visited', this.$el).length == $('.item', this.$el).length) {
                this.model.set('complete',true);
            }
        }
    }
});
