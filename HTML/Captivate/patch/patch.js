Adapt.Patcher = false;
function initPatch() {
    if (Adapt.Patcher == false) {
    Adapt.Patcher = true;
    var PatchModel = Backbone.Model.extend({
        initialize: function() {
            //console.log('patch model created');
        }
    });
    
    var PatchStyleModel = Backbone.Model.extend({
        initialize: function() {
            //console.log('patch style model created');
        }
    });
    
    var PatchStyle = Backbone.View.extend({
        el:'#patch-results',
        initialize: function() {
            //console.log('patch style view created');
            this.render();
            this.collection.on('change', this.render, this);
        },
        render: function() {
            var data = {models: this.collection.toJSON()};
            var template = Handlebars.compile($("#patch-results-template").html());
            $(this.el).html(template(data));
            return this;
        }
    });
    
    var PatchStyleCollection = Backbone.Collection.extend({
        model: PatchStyleModel,
        initialize: function() {
            //console.log('patch style collection created');
            this.on('change',this.renderPatches, this);
            $('<style/>', {
                id: 'patch-results',
            }).appendTo('body');
        },
        setup: function () {
            $that = this;
            _.each(this.models, function (model){
                new Patch({model:model});
                
            });
            new PatchStyle({collection:$that});
        },
        renderPatches: function() {
            _.each(this.models, function (model){
                //model.render();
            });
        }
    });
    
    Adapt.PatchCollection = new PatchStyleCollection();
    
    var Patch = Backbone.View.extend({
        tagName:'div',
        className:'patch-tool',
        initialize: function() {
            this.model.on('renderView', this.render, this);
        },
        events: {
            'change .patch-background-color':'changeBackgroundColor',
            'click .patch-background-image-save':'uploadBackgroundImage',
            'change .patch-background-height':'changeBackgroundHeight',
            'change .patch-background-position-x':'changeBackgroundPositionX',
            'change .patch-background-position-y':'changeBackgroundPositionY',
            'change .patch-background-repeat':'changeBackgroundRepeat',
            'change .patch-background-attachment':'changeBackgroundAttachment'
        },
        render: function(){
            console.log('editing page collection')
            //this.delegateEvents();
            var data = this.model.toJSON();
            var template = Handlebars.compile($("#patch-template").html());
            $('#patch').html($(this.el).html(template(data))).show();
            this.delegateEvents();
            return this;
        },
        changeBackgroundColor: function (event) {
            //$('#patch-results').empty();
            this.model.set('backgroundColor', $(event.currentTarget).val());
        },
        changeBackgroundHeight: function (event) {
            //$('#patch-results').empty();
            this.model.set('backgroundHeight', $(event.currentTarget).val()+'px');
        },
        uploadBackgroundImage: function (event) {
            event.preventDefault();
            var $that = this;
            var fileInput = $('.patch-background-image', this.$el);
            console.log(fileInput);
            console.log(fileInput[0].files[0])
            var file = fileInput[0].files[0];
            var formData = new FormData();
            formData.append('file', file);
            $.ajax({  
                url: "patch/scripts/upload_file.php",  
                type: "POST",  
                data: formData,  
                processData: false,  
                contentType: false,  
                success: function (res) {  
                    console.log(res);
                    $that.changeBackgroundImage();
                }  
            });
        },
        changeBackgroundImage: function (event) {
            this.model.set('backgroundImage', $('.patch-background-image', this.$el).val().split('\\').pop());
        },
        changeBackgroundPositionX: function(event) {
            this.model.set('backgroundPositionX', $(event.currentTarget).val()+'px');
        },
        changeBackgroundPositionY: function(event) {
            this.model.set('backgroundPositionY', $(event.currentTarget).val()+'px');
        },
        changeBackgroundRepeat: function(event) {
            this.model.set('backgroundRepeat', $(event.currentTarget).val());
        },
        changeBackgroundAttachment: function(event) {
            this.model.set('backgroundAttachment', $(event.currentTarget).val());
        }
    });
    
    var PatchMenu = Backbone.View.extend({
        el: '#patch-menu',
        initialize: function() {
            var $that = this;
            this.model.on('change:setup', this.setup, this);
            Adapt.PatchCollection.add({
                type:'body',
                body:true
            });
            _.each(Adapt.Pages.models, function(model){
                Adapt.PatchCollection.add({
                    type:'page',
                    module:model.get('module'),
                    topic:model.get('topic'),
                    page:model.get('page')
                });
            });
            _.each(Adapt.Articles.models, function(model){
                Adapt.PatchCollection.add({
                    type:'article',
                    module:model.get('module'),
                    topic:model.get('topic'),
                    page:model.get('page'),
                    article:model.get('article')
                });
            });
            _.each(Adapt.Blocks.models, function(model){
                Adapt.PatchCollection.add({
                    type:'block',
                    module:model.get('module'),
                    topic:model.get('topic'),
                    page:model.get('page'),
                    article:model.get('article'),
                    block:model.get('block')
                });
            });
            Adapt.PatchCollection.setup();
            $('body').on('keypress', function(event){
                if (event.which == '80') {
                    if ($that.model.get('active')==false) {
                        $that.model.set('active', true);
                    } else {
                        $that.model.set('active', false);
                        $('#patch').fadeOut();
                    }
                }
            });
            $(document).on("contextmenu", function(event){
                $that.model.set('edit','start');
                if ($that.model.get('active')) {
                    var currentArticle = $(event.target).closest(".article").attr('data-id');
                    var currentBlock = $(event.target).closest(".block").attr('data-id');
                    $that.model.set({'article':currentArticle, 'block':currentBlock});
                    event.preventDefault();
                    var pageOrigX = event.pageX;
                    var pageOrigY = event.pageY - $(window).scrollTop();
                    $('#patch-menu').show().css({'left':pageOrigX, 'top':pageOrigY});
                    $that.render();
                    return false;
                }
            });
            $(document).on("click", function(event){
                if ($that.model.get('active')) {
                    $('#patch-menu').hide();
                }
            });
        },
        events: {
            'click .body-background':'editBody',
            'click .page-background':'editPage',
            'click .article-background':'editArticle',
            'click .block-background':'editBlock',
            'click .save-patch':'savePatch'
        },
        render: function(){
            var data = this.model.toJSON();
            var template = Handlebars.compile($("#patch-menu-template").html());
            $(this.el).html(template(data));
            return this;
        },
        editBody: function(){
            this.model.set('edit','body');
            this.setup();
        },
        editPage: function(){
            console.log('editing page')
            this.model.set('edit','page');
            this.setup();
        },
        editArticle: function(){
            this.model.set('edit','article');
            this.setup();
        },
        editBlock: function(){
            this.model.set('edit','block');
            this.setup();
        },
        savePatch: function () {
            var cssData = $('#patch-results').html();
            //console.log(cssData);
            $.post('patch/scripts/save_css.php', {text:cssData },function (response){
                $('.save-patch', this.$el).text('Download?').fadeIn('slow');
            },'text');
        },
        setup: function () {
            this.model.set('module', Adapt.Manager.model.get('module'));
            this.model.set('topic', Adapt.Manager.model.get('topic'));
            this.model.set('page', Adapt.Manager.model.get('page'));
            if (this.model.get('edit')=='body') {
                var currentPatch = Adapt.PatchCollection.where({
                    type:'body'
                });
                currentPatch[0].trigger('renderView');
            } else if (this.model.get('edit')=='page') {
                var currentPatch = Adapt.PatchCollection.where({
                    type:'page', 
                    module:this.model.get('module'), 
                    topic:this.model.get('topic'), 
                    page:this.model.get('page')
                });
                currentPatch[0].trigger('renderView');
            } else if (this.model.get('edit')=='article') {
                var currentPatch = Adapt.PatchCollection.where({
                    type:'article', 
                    module:this.model.get('module'), 
                    topic:this.model.get('topic'), 
                    page:this.model.get('page'), 
                    article:this.model.get('article')
                });
                currentPatch[0].trigger('renderView');
            } else if (this.model.get('edit')=='block') {
                var currentPatch = Adapt.PatchCollection.where({
                    type:'block', 
                    module:this.model.get('module'), 
                    topic:this.model.get('topic'), 
                    page:this.model.get('page'), 
                    article:this.model.get('article'), 
                    block:this.model.get('block')
                });
                currentPatch[0].trigger('renderView');
            }
        }
    });
    Adapt.PatchMenu = new PatchMenu({
        model: new PatchModel({
            module: Adapt.Manager.model.get('module'),
            topic: Adapt.Manager.model.get('topic'),
            page: Adapt.Manager.model.get('page'),
            active: false
        })
    });
    }
}