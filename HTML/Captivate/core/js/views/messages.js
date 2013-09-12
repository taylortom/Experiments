var MessageView = Backbone.View.extend({
    tagName: 'div',
    className: 'message',
    initialize: function() {
        this.isOpen = false;
        this.model.on('close', this.close, this);
    },
    events: {
        'click .open-message':'toggleOpen',
        'click .pop-out-done':'close'
    },
    render: function() {
        var data = this.model.toJSON();
        var template = Handlebars.templates["message"]
        var section = $('#inbox '+'.messages .'+data.page+' .page-messages');
        section.removeClass('empty');
        section.append($(this.el).append(template(data)))
        if(data.hardfire){
            this.open();
            Adapt.MessageCenter.open();
            this.model.set({read: true, hardfire: false})
        }  
    },
    toggleOpen: function(event) {
        if(event)
            event.preventDefault();
        
        console.log(this.isOpen);
        if(this.isOpen)
            this.close();
        else
            this.open();
    },
    open: function(event) {
        var $that = this;
        _.each(Adapt.Inbox.sent(), function(model){
            if(model != $that.model)
                model.trigger('close');
        })
        $('.pop-out', this.el).show();
        $('.preview', this.el).removeClass('unread-message');
        $(this.el).addClass('open')
        this.model.set("read", true)
        this.isOpen = true;
    },
    close: function(event) {
        if(event)
            event.preventDefault();
        $('.pop-out', this.el).hide();
        $(this.el).removeClass('open')
        this.isOpen = false;
    }


});


var MessagesView = Backbone.View.extend({
    el: "#inbox",
    initialize: function() {
        this.collection.on('change', this.update, this);
        this.collection.on('change:sent', this.render, this);
    },
    events: {
        'click .done': 'close',
        'click .unread':'setUnread',
        'click .all':'setAll',
        'click .favourites':'setFavs',
        'click .resources':'setResources'
    },
    update: function() {
        var unreadNo = _.reduce(this.collection.sent(), function(memo, model){
            if(model.get("read") == false)
                return memo + 1
            else
                return memo
        },0)
        if (unreadNo > 0) {
            $('#navigation .messages .unread').html(unreadNo);
            $('#navigation .messages').addClass('unread');
        }
        else {
            $('#navigation .messages .unread').html('');
            $('#navigation .messages').removeClass('unread');
        }
    },
    render: function() {
        var data = Adapt.Pages
        var template = Handlebars.templates["message-center"]
        this.$el.html(template(data));
        if(event)
            event.preventDefault();
        _.each(this.collection.sent(), function(model){
            new MessageView({model: model});
        })
    },
    open: function(event) {
        if(event){
            event.preventDefault();
            this.render();
        }
        this.isOpen = true;
        
        $(this.el).show().animate({'left':'0px'}, 400);
        $("#fullscreen").show();
        var msgHeight = $('.messages', this.el).height()
        $('.messages', this.el).height(msgHeight - 43)
    },
    close: function(event) {
        if(event)
            event.preventDefault();
        this.isOpen = false;
        
        $(this.el).hide().animate({'left':'-300px'}, 400);
        $("#fullscreen").hide();
    }

});
