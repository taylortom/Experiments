BlockShifterView = Backbone.View.extend({
    el: '.block-shifter',
    initialize: function(){
        this.listenTo(Adapt.Manager.model, 'change:device', this.toggle, this);
        this.model.on('change:active', this.toggle, this);
    },
    events: {
        'click .next':'nextBlock',
        'click .back':'previousBlock'
    },
    render: function() {
        this.delegateEvents();
        $('#wrapper').append(this.el);
        var data = this.model.toJSON();
        var template = Handlebars.templates["block-shifter"];
        $(this.el).html(template(data));
        return this;
    },
    toggle: function (){
        if (this.model.get('active')=='true') {
            this.activate();
        } else if (this.model.get('active')=='false') {
            if (Adapt.Manager.model.get('screenSize') < 699) {
                this.activate();
            } else {
                this.deactivate();
            }
            
        }
        // Use this to take off BlockShifter for mobile
        this.deactivate();
    },
    activate : function() {
        this.$el.show();
        $('.article', '#page').hide().first().show();
        $('.block', '#page').hide().first().show();
        this.render();
        this.model.set('blockLength', $('.block', '#page').length);
        this.model.set('articleLength', $('.article', '#page').length);
        this.model.set('currentBlock', 0);
        this.model.set('currentArticle', 0);
    },
    deactivate: function () {
        this.$el.hide();
        $('.article', '#page').show();
        $('.block', '#page').show();
    },
    nextBlock: function (event) {
        event.preventDefault();
        if (this.model.get('currentBlock') < (this.model.get('blockLength')-1)) {
            if ($('.block','#page').eq(this.model.get('currentBlock')).is('.block:last-child')) {
                $('.article', '#page').eq(this.model.get('currentArticle')).hide();
                this.model.set('currentArticle',this.model.get('currentArticle')+1);
                $('.article', '#page').eq(this.model.get('currentArticle')).show();
            }
            $('.block', '#page').eq(this.model.get('currentBlock')).hide();
            this.model.set('currentBlock',this.model.get('currentBlock')+1);
            $('.block', '#page').eq(this.model.get('currentBlock')).show();
        }
        $('body').scrollTop(0);
    },
    previousBlock: function (event) {
        event.preventDefault();
        if (this.model.get('currentBlock') > 0) {
            if ($('.block','#page').eq(this.model.get('currentBlock')).is($('.block:first', $('.article', '#page').eq(this.model.get('currentArticle'))))) {
                $('.article', '#page').eq(this.model.get('currentArticle')).hide();
                this.model.set('currentArticle',this.model.get('currentArticle')-1);
                $('.article', '#page').eq(this.model.get('currentArticle')).show();
            }
            $('.block', '#page').eq(this.model.get('currentBlock')).hide();
            this.model.set('currentBlock',this.model.get('currentBlock')-1);
            $('.block', '#page').eq(this.model.get('currentBlock')).show();
        }
        $('body').scrollTop(0);
    }
});