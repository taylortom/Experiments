function initThemeBuilder() {    
    var ThemeBuilder = Backbone.Model.extend({
        initialize: function () {
            //console.log('theme builder model item');
        },
        url: 'stitch/stitch.json'
    });
    
    var ThemeBuilderGlobalView = Backbone.View.extend({
        tagName:'div',
        id:'stitch',
        initialize: function () {
            var $that = this;
            var script   = document.createElement("script");
            script.type  = "text/javascript";
            script.src   = "stitch/library/colorpicker.js";
            document.head.appendChild(script);
            $('<div/>', {
                id: 'stitch-template',
            }).appendTo('body');
            $('<style/>', {
                id: 'stitch-results',
            }).appendTo('body');
            $('<link/>', {
                href: 'stitch/css/theme-builder.css',
                type: 'text/css',
                rel:'stylesheet'
            }).appendTo('head');
            $('<link/>', {
                href: 'stitch/css/colorpicker.css',
                type: 'text/css',
                rel:'stylesheet'
            }).appendTo('head');
            $('#stitch-template').load('stitch/templates/stitch-template.html', function() {
                $that.model.fetch({
                    success: function(){
                        $that.buildStitch(); 
                    }             
                });
            });
            this.model.on('update', this.saveCSS, this);
        },
        buildStitch: function(){
            this.model.set('open',false);
            this.model.set('state','save');
            new ThemeBuilderGlobalViewStyle({model:this.model});
            $('.theme-builder .inner').append(this.$el);
            this.render();
            $('input.color', this.$el).each(function(event){
                $(this).ColorPicker({
                    onSubmit: function(hsb, hex, rgb, el) {
                        $(el).val(hex);
                        $(el).ColorPickerHide();
                        $(el).change();
                    },
                    onBeforeShow: function (hsb, hex, rgb, el) {
                        $(this).ColorPickerSetColor(this.value);
                    }
                }).bind('keyup', function(){
                    $(this).ColorPickerSetColor(this.value);
                });
            });
            this.saveCSS();
            this.setup();
        },
        events: {
            'click .open':'toggleOpen',
            'click .expand > .title':'openCurrentStyles',
            'click .save':'saveCSS',
            'change input.main-text-color':'changePColor',
            'change input.main-text-size':'changeMainTextSize',
            'change input.link-icon-color':'changeLinkIconColor',
            'change input.link-icon-hover-color':'changeLinkIconHoverColor',
            'change input.nav-background-color':'changeNavBackgroundColor',
            'change input.nav-border-color':'changeNavBorderColor',
            'change input.page-title-size':'changePageTitleSize',
            'change input.article-title-size':'changeArticleTitleSize',
            'change input.block-title-size':'changeBlockTitleSize',
            'change input.component-title-size':'changeComponentTitleSize',
            'change input.page-title-color':'changePageTitleColor',
            'change input.article-title-color':'changeArticleTitleColor',
            'change input.block-title-color':'changeBlockTitleColor',
            'change input.component-title-color':'changeComponentTitleColor',
            'change input.body-background-color':'changeBodyBackgroundColor',
            'change input.page-background-color':'changePageBackgroundColor',
            'change input.article-background-color':'changeArticleBackgroundColor',
            'change input.block-background-color':'changeBlockBackgroundColor',
            'change input.component-background-color':'changeComponentBackgroundColor',
            'change input.page-padding-top':'changePagePaddingTop',
            'change input.page-padding-right':'changePagePaddingRight',
            'change input.page-padding-bottom':'changePagePaddingBottom',
            'change input.page-padding-left':'changePagePaddingLeft',
            'change input.page-title-padding-top':'changePageTitlePaddingTop',
            'change input.page-title-padding-right':'changePageTitlePaddingRight',
            'change input.page-title-padding-bottom':'changePageTitlePaddingBottom',
            'change input.page-title-padding-left':'changePageTitlePaddingLeft',
            'change input.article-padding-top':'changeArticlePaddingTop',
            'change input.article-padding-right':'changeArticlePaddingRight',
            'change input.article-padding-bottom':'changeArticlePaddingBottom',
            'change input.article-padding-left':'changeArticlePaddingLeft',
            'change input.article-title-padding-top':'changeArticleTitlePaddingTop',
            'change input.article-title-padding-right':'changeArticleTitlePaddingRight',
            'change input.article-title-padding-bottom':'changeArticleTitlePaddingBottom',
            'change input.article-title-padding-left':'changeArticleTitlePaddingLeft',
            'change input.block-padding-top':'changeBlockPaddingTop',
            'change input.block-padding-right':'changeBlockPaddingRight',
            'change input.block-padding-bottom':'changeBlockPaddingBottom',
            'change input.block-padding-left':'changeBlockPaddingLeft',
            'change input.block-title-padding-top':'changeBlockTitlePaddingTop',
            'change input.block-title-padding-right':'changeBlockTitlePaddingRight',
            'change input.block-title-padding-bottom':'changeBlockTitlePaddingBottom',
            'change input.block-title-padding-left':'changeBlockTitlePaddingLeft',
            'change select.main-font-family':'changeMainFontFamily',
            'change input.article-margin-top':'changeArticleMarginTop',
            'change input.block-margin-top':'changeBlockMarginTop',
            'change input.component-margin-top':'changeComponentMarginTop',
            'change input.smart-component-spacing':'changeSmartComponentSpacing',
            'change input.text-margin-top':'changeTextMarginTop',
            'change input.text-title-size':'changeTextTitleSize',
            'change input.text-title-color':'changeTextTitleColor',
            'change input.graphic-margin-top':'changeGraphicMarginTop',
            'change input.graphic-title-size':'changeGraphicTitleSize',
            'change input.graphic-title-color':'changeGraphicTitleColor',
            'change input.media-margin-top':'changeMediaMarginTop',
            'change input.media-title-size':'changeMediaTitleSize',
            'change input.media-title-color':'changeMediaTitleColor',
            'change input.narrative-margin-top':'changeNarrativeMarginTop',
            'change input.narrative-title-size':'changeNarrativeTitleSize',
            'change input.narrative-title-color':'changeNarrativeTitleColor',
            'change input.narrative-controls-color':'changeNarrativeControlsColor',
            'change input.narrative-controls-icon-color':'changeNarrativeControlsIconColor',
            'change input.narrative-controls-icon-hover-color':'changeNarrativeControlsIconHoverColor',
            'change input.narrative-mobile-icon-color':'changeNarrativeMobileIconColor',
            'change input.narrative-mobile-icon-hover-color':'changeNarrativeMobileIconHoverColor',
            'change input.narrative-strapline-background-color':'changeNarrativeStraplineBackgroundColor',
            'change input.narrative-strapline-text-color':'changeNarrativeStraplineTextColor',
            'change input.narrative-popup-background-color':'changeNarrativePopupBackgroundColor',
            'change input.narrative-popup-text-color':'changeNarrativePopupTextColor',
            'change input.narrative-popup-icon-color':'changeNarrativePopupIconColor',
            'change input.narrative-popup-icon-hover-color':'changeNarrativePopupIconHoverColor',
            'change input.hotGraphic-margin-top':'changeHotGraphicMarginTop',
            'change input.hotGraphic-title-size':'changeHotGraphicTitleSize',
            'change input.hotGraphic-title-color':'changeHotGraphicTitleColor',
            'change input.hotGraphic-pin-color':'changeHotGraphicPinColor',
            'change input.hotGraphic-pin-hover-color':'changeHotGraphicPinHoverColor',
            'change input.hotGraphic-pin-size':'changeHotGraphicPinSize',
            'change input.hotGraphic-popup-background-color':'changeHotGraphicPopupBackgroundColor',
            'change input.hotGraphic-popup-border-color':'changeHotGraphicPopupBorderColor',
            'change input.hotGraphic-popup-toolbar-background-color':'changeHotGraphicPopupToolbarBackgroundColor',
            'change input.hotGraphic-popup-toolbar-text-color':'changeHotGraphicPopupToolbarTextColor',
            'change input.hotGraphic-popup-toolbar-icon-color':'changeHotGraphicPopupToolbarIconColor',
            'change input.hotGraphic-popup-toolbar-icon-hover-color':'changeHotGraphicPopupToolbarIconHoverColor',
            'change input.hotGraphic-popup-text-color':'changeHotGraphicPopupTextColor',
            'change input.hotGraphic-popup-padding':'changeHotGraphicPopupPadding',
            'change input.hotGraphic-popup-spacing':'changeHotGraphicPopupSpacing',
            'change input.accordion-margin-top':'changeAccordionMarginTop',
            'change input.accordion-title-size':'changeAccordionTitleSize',
            'change input.accordion-title-color':'changeAccordionTitleColor',
            'change input.accordion-icon-color':'changeAccordionIconColor',
            'change input.accordion-icon-hover-color':'changeAccordionIconHoverColor',
            'change input.accordion-icon-visited-color':'changeAccordionIconVisitedColor',
            'change input.accordion-item-background-color':'changeAccordionItemBackgroundColor',
            'change input.accordion-item-hover-background-color':'changeAccordionItemHoverBackgroundColor',
            'change input.accordion-item-visited-background-color':'changeAccordionItemVisitedBackgroundColor',
            'change input.accordion-item-title-text-color':'changeAccordionItemTitleTextColor',
            'change input.accordion-item-title-text-hover-color':'changeAccordionItemTitleTextHoverColor',
            'change input.accordion-item-title-text-visited-color':'changeAccordionItemTitleTextVisitedColor',
            'change input.accordion-item-body-background-color':'changeAccordionItemBodyBackgroundColor',
            'change input.accordion-item-body-text-color':'changeAccordionItemBodyTextColor',
            'change input.accordion-item-body-padding':'changeAccordionItemBodyPadding',
            'change input.accordion-item-spacing':'changeAccordionItemSpacing',
            'change input.accordion-item-border-color':'changeAccordionItemBorderColor',
            'change input.mcq-margin-top':'changeMcqMarginTop',
            'change input.mcq-title-size':'changeMcqTitleSize',
            'change input.mcq-title-color':'changeMcqTitleColor',
            'change input.mcq-icon-color':'changeMcqIconColor',
            'change input.mcq-correct-icon-color':'changeMcqCorrectIconColor',
            'change input.mcq-incorrect-icon-color':'changeMcqIncorrectIconColor',
            'change input.mcq-icon-hover-color':'changeMcqIconHoverColor',
            'change input.mcq-icon-selected-color':'changeMcqIconSelectedColor',
            'change input.mcq-item-background-color':'changeMcqItemBackgroundColor',
            'change input.mcq-item-background-hover-color':'changeMcqItemHoverBackgroundColor',
            'change input.mcq-item-background-selected-color':'changeMcqItemSelectedBackgroundColor',
            'change input.mcq-item-text-color':'changeMcqItemTextColor',
            'change input.mcq-item-text-hover-color':'changeMcqItemTextHoverColor',
            'change input.mcq-item-text-selected-color':'changeMcqItemTextSelectedColor',
            'change input.mcq-button-background-color':'changeMcqButtonBackgroundColor',
            'change input.mcq-button-background-hover-color':'changeMcqButtonBackgroundHoverColor',
            'change input.mcq-button-text-color':'changeMcqButtonTextColor',
            'change input.mcq-button-text-hover-color':'changeMcqButtonTextHoverColor',
            'change input.ppq-margin-top':'changePpqMarginTop',
            'change input.ppq-title-size':'changePpqTitleSize',
            'change input.ppq-title-color':'changePpqTitleColor',
            'change input.ppq-pin-color':'changePpqPinColor',
            'change input.ppq-pin-hover-color':'changePpqPinHoverColor',
            'change input.ppq-pin-correct-color':'changePpqPinCorrectColor',
            'change input.ppq-pin-incorrect-color':'changePpqPinIncorrectColor',
            'change input.ppq-button-background-color':'changePpqButtonBackgroundColor',
            'change input.ppq-button-background-hover-color':'changePpqButtonBackgroundHoverColor',
            'change input.ppq-button-text-color':'changePpqButtonTextColor',
            'change input.ppq-button-text-hover-color':'changePpqButtonTextHoverColor',
            'change input.guide-background-color':'changeGuideBackgroundColor',
            'change input.guide-text-color':'changeGuideTextColor',
            'change input.guide-title-text-size':'changeGuideTitleTextSize',
            'change input.guide-body-text-size':'changeGuideBodyTextSize',
            'change input.guide-icon-color':'changeGuideIconColor',
            'change input.guide-icon-hover-color':'changeGuideIconHoverColor',
            'change input.guide-footer-background-color':'changeGuideFooterBackgroundColor',
            'change input.guide-footer-progress-color':'changeGuideFooterProgressColor',
            'change input.guide-footer-progress-selected-color':'changeGuideFooterProgressSelectedColor',
            'change input.guide-button-background-color':'changeGuideButtonBackgroundColor',
            'change input.guide-button-background-hover-color':'changeGuideButtonBackgroundHoverColor',
            'change input.guide-button-text-color':'changeGuideButtonTextColor',
            'change input.guide-button-text-hover-color':'changeGuideButtonTextHoverColor',
            'change input.tutor-background-color':'changeTutorBackgroundColor',
            'change input.tutor-text-color':'changeTutorTextColor',
            'change input.tutor-title-text-size':'changeTutorTitleTextSize',
            'change input.tutor-body-text-size':'changeTutorBodyTextSize',
            'change input.tutor-icon-color':'changeTutorIconColor',
            'change input.tutor-icon-hover-color':'changeTutorIconHoverColor',
            'change input.messages-toolbar-background-color':'changeMessagesToolbarBackgroundColor',
            'change input.messages-toolbar-text-color':'changeMessagesToolbarTextColor',
            'change input.messages-toolbar-icon-color':'changeMessagesToolbarIconColor',
            'change input.messages-toolbar-icon-hover-color':'changeMessagesToolbarIconHoverColor',
            'change input.messages-divide-background-color':'changeMessagesDivideBackgroundColor',
            'change input.messages-divide-text-color':'changeMessagesDivideTextColor',
            'change input.messages-message-background-color':'changeMessagesMessageBackgroundColor',
            'change input.messages-message-text-color':'changeMessagesMessageTextColor',
            'change input.messages-message-unread-background-color':'changeMessagesMessageUnreadBackgroundColor',
            'change input.messages-message-unread-text-color':'changeMessagesMessageUnreadTextColor'
        },
        setup: function() {
            var value;
            switch (this.model.get('mainFontFamily')) {
                case 'Arial, Helvetica, sans-serif':
                    value = 'arial';
                    break;
                case '"Arial Black", Gadget, sans-serif':
                    value = 'arialBlack';
                    break;
                case '"Comic Sans MS", cursive, sans-serif':
                    value = 'comicSans';
                    break;
                case 'Impact, Charcoal, sans-serif':
                    value = 'impact';
                    break;
                case '"Lucida Sans Unicode", "Lucida Grande", sans-serif':
                    value = 'lucida';
                    break;
                case 'Tahoma, Geneva, sans-serif':
                    value = 'tahoma';
                    break;
                case '"Trebuchet MS", Helvetica, sans-serif':
                    value = 'trebuchet';
                    break;
                case 'Verdana, Geneva, sans-serif':
                    value = 'verdana';
                    break;
                case 'Georgia, serif':
                    value = 'georgia';
                    break;
                case '"Palatino Linotype", "Book Antiqua", Palatino, serif':
                    value = 'palatino';
                    break;
                case '"Times New Roman", Times, serif':
                    value = 'times';
                    break;
                case '"Courier New", Courier, monospace':
                    value = 'courier';
                    break;
                case '"Lucida Console", Monaco, monospace':
                    value = 'lucidaConsole';
                    break;
                default:
                    value = 'bespokeFont';
                    break;
            }
            $(".main-font-family option[value='"+value+"']").attr("selected", "selected");
        },
        render: function () {
            var data = this.model.toJSON();
            //var template = Handlebars.compile($("#stitch-ui-template").html());
            var template = Handlebars.templates['stitch']
            $(this.el).html(template(data)).appendTo('body');
            return this;
        },
        toggleOpen: function(event) {
            if (this.model.get('open')) {
                this.$el.animate({'right':-296,'height':'24px'});
                $('.stitch', this.$el).animate({'left':0,'margin-top':'0px'});
                $('.collapse', this.$el).hide();
                $('.expand', this.$el).fadeOut();
                $('.selected', this.$el).removeClass('selected');
                this.model.set('open',false);
                $('.icon', this.$el).removeClass('minus');
            } else {
                this.$el.animate({'right':0,'height':'100%'});
                $('.collapse', this.$el).hide();
                $('.expand', this.$el).fadeIn();
                this.model.set('open',true);
                $('.stitch', this.$el).animate({'left':'280px','margin-top':'10px'});
                $('.icon', this.$el).removeClass('minus');
            }
        },
        openCurrentStyles: function(event) {
            if ($(event.currentTarget).hasClass('selected')) {
                $('.selected', this.$el).siblings('.collapse').hide();
                $('.selected', this.$el).removeClass('selected').siblings('.icon').toggleClass('minus');
            } else {
                $('.selected', this.$el).siblings('.collapse').hide();
                $('.selected', this.$el).siblings('.icon').toggleClass('minus');
                $('.selected', this.$el).removeClass('selected');
                $(event.currentTarget).addClass('selected').siblings('.collapse').toggle();
                $(event.currentTarget).siblings('.icon').toggleClass('minus');
            }
            
        },
        saveCSS: function (event) {
            var cssResults = $('#stitch-results').html();
            var cssData = JSON.stringify(this.model.toJSON());
            console.log(this.model.toJSON());
            //console.log(require);
            if (typeof require != 'function')
                return;
            var gui = require('nw.gui');
            var win = gui.Window.get();
            console.log(gui);
            win.cssData = cssData;
            win.cssResults = cssResults;
            console.log(win.cssData);
            console.log(win.cssResults);
            
            /*console.log(this.model);
            var $currentEvent = $(event.currentTarget);
            if (this.model.get('state')=='save') {
                event.preventDefault();
                $(event.currentTarget).attr({'download':'theme','href':'css/theme/theme.css'});
                $(event.currentTarget).hide();
                console.log('here');
                this.model.set('state','download');
                var cssData = $('#stitch-results').html();
                // test
                // var cssData = $('#colo').html();
                console.log(cssData);
                $.post('stitch/scripts/save_css.php', {text:cssData },function (response){
                    $('#stitch .save').text('Download?').fadeIn('slow');
                    console.log(response);
                },'text');
            } else {
                this.model.set('state','save');
                $(event.currentTarget).hide(function(){
                    $('#stitch .save').text('SAVE').fadeIn('slow');
                });
                
            }*/
        },
        changeMainTextSize: function(event) {
            this.model.set('mainTextSize', $(event.currentTarget).val()+'px');
        },
        changePColor: function(event) {
            this.model.set('pColor', $(event.currentTarget).val());
        },
        changeMainFontFamily: function(event) {
            var value = $(event.currentTarget).val();
            switch (value) {
                case "arial":
                    this.model.set('mainFontFamily', 'Arial, Helvetica, sans-serif');
                    break;
                case "arialBlack":
                    this.model.set('mainFontFamily', '"Arial Black", Gadget, sans-serif');
                    break;
                case "comicSans":
                    this.model.set('mainFontFamily', '"Comic Sans MS", cursive, sans-serif');
                    break;
                case "impact":
                    this.model.set('mainFontFamily', 'Impact, Charcoal, sans-serif');
                    break;
                case "lucida":
                    this.model.set('mainFontFamily', '"Lucida Sans Unicode", "Lucida Grande", sans-serif');
                    break;
                case "tahoma":
                    this.model.set('mainFontFamily', 'Tahoma, Geneva, sans-serif');
                    break;
                case "trebuchet":
                    this.model.set('mainFontFamily', '"Trebuchet MS", Helvetica, sans-serif');
                    break;
                case "verdana":
                    this.model.set('mainFontFamily', 'Verdana, Geneva, sans-serif');
                    break;
                case "georgia":
                    this.model.set('mainFontFamily', 'Georgia, serif');
                    break;
                case "palatino":
                    this.model.set('mainFontFamily', '"Palatino Linotype", "Book Antiqua", Palatino, serif');
                    break;
                case "times":
                    this.model.set('mainFontFamily', '"Times New Roman", Times, serif');
                    break;
                case "courier":
                    this.model.set('mainFontFamily', '"Courier New", Courier, monospace');
                    break;
                case "lucidaConsole":
                    this.model.set('mainFontFamily', '"Lucida Console", Monaco, monospace');
                    break;
                case "bespokeFont":
                    this.model.set('mainFontFamily', false);
                    break;
            }
        },
        changeLinkIconColor: function(event) {
            this.model.set('linkIconColor', $(event.currentTarget).val());
        },
        changeLinkIconHoverColor: function(event) {
            this.model.set('linkIconHoverColor', $(event.currentTarget).val());
        },
        changeNavBackgroundColor: function(event) {
            this.model.set('navBackgroundColor', $(event.currentTarget).val());
        },
        changeNavBorderColor: function(event) {
            this.model.set('navBorderColor', $(event.currentTarget).val());
        },
        changePageTitleSize: function(event) {
            this.model.set('pageTitleSize', $(event.currentTarget).val()+'px');
        },
        changeArticleTitleSize: function(event) {
            this.model.set('articleTitleSize', $(event.currentTarget).val()+'px');
        },
        changeBlockTitleSize: function(event) {
            this.model.set('blockTitleSize', $(event.currentTarget).val()+'px');
        },
        changeComponentTitleSize: function(event) {
            this.model.set('componentTitleSize', $(event.currentTarget).val()+'px');
        },
        changePageTitleColor: function(event) {
            this.model.set('pageTitleColor', $(event.currentTarget).val());
        },
        changeArticleTitleColor: function(event) {
            this.model.set('articleTitleColor', $(event.currentTarget).val());
        },
        changeBlockTitleColor: function(event) {
            this.model.set('blockTitleColor', $(event.currentTarget).val());
        },
        changeComponentTitleColor: function(event) {
            this.model.set('componentTitleColor', $(event.currentTarget).val());
        },
        changeBodyBackgroundColor: function(event) {
            if ( $(event.currentTarget).val()=='none') {
                this.model.set('bodyBackgroundColor', false);
            } else {
                this.model.set('bodyBackgroundColor', $(event.currentTarget).val());
            }
        },
        changePageBackgroundColor: function(event) {
            if ( $(event.currentTarget).val()=='none') {
                this.model.set('pageBackgroundColor', false);
            } else {
                this.model.set('pageBackgroundColor', $(event.currentTarget).val());
            }
        },
        changeArticleBackgroundColor: function(event) {
            if ( $(event.currentTarget).val()=='none') {
                this.model.set('articleBackgroundColor', false);
            } else {
                this.model.set('articleBackgroundColor', $(event.currentTarget).val());
            }
            
        },
        changeBlockBackgroundColor: function(event) {
            if ( $(event.currentTarget).val()=='none') {
                this.model.set('blockBackgroundColor', false);
            } else {
                this.model.set('blockBackgroundColor', '#'+$(event.currentTarget).val());
            }
        },
        changeComponentBackgroundColor: function(event) {
            this.model.set('componentBackgroundColor', $(event.currentTarget).val());
        },
        changePagePaddingTop: function(event) {
            this.model.set('pagePaddingTop', $(event.currentTarget).val()+'px');
        },
        changePagePaddingRight: function(event) {
            this.model.set('pagePaddingRight', $(event.currentTarget).val()+'px');
        },
        changePagePaddingBottom: function(event) {
            this.model.set('pagePaddingBottom', $(event.currentTarget).val()+'px');
        },
        changePagePaddingLeft: function(event) {
            this.model.set('pagePaddingLeft', $(event.currentTarget).val()+'px');
        },
        changePageTitlePaddingTop: function(event) {
            this.model.set('pageTitlePaddingTop', $(event.currentTarget).val()+'px');
        },
        changePageTitlePaddingRight: function(event) {
            this.model.set('pageTitlePaddingRight', $(event.currentTarget).val()+'px');
        },
        changePageTitlePaddingBottom: function(event) {
            this.model.set('pageTitlePaddingBottom', $(event.currentTarget).val()+'px');
        },
        changePageTitlePaddingLeft: function(event) {
            this.model.set('pageTitlePaddingLeft', $(event.currentTarget).val()+'px');
        },
        changeArticlePaddingTop: function(event) {
            this.model.set('articlePaddingTop', $(event.currentTarget).val()+'px');
        },
        changeArticlePaddingRight: function(event) {
            this.model.set('articlePaddingRight', $(event.currentTarget).val()+'px');
        },
        changeArticlePaddingBottom: function(event) {
            this.model.set('articlePaddingBottom', $(event.currentTarget).val()+'px');
        },
        changeArticlePaddingLeft: function(event) {
            this.model.set('articlePaddingLeft', $(event.currentTarget).val()+'px');
        },
        changeArticleMarginTop: function(event) {
            this.model.set('articleMarginTop', $(event.currentTarget).val()+'px');
        },
        changeArticleTitlePaddingTop: function(event) {
            this.model.set('articleTitlePaddingTop', $(event.currentTarget).val()+'px');
        },
        changeArticleTitlePaddingRight: function(event) {
            this.model.set('articleTitlePaddingRight', $(event.currentTarget).val()+'px');
        },
        changeArticleTitlePaddingBottom: function(event) {
            this.model.set('articleTitlePaddingBottom', $(event.currentTarget).val()+'px');
        },
        changeArticleTitlePaddingLeft: function(event) {
            this.model.set('articleTitlePaddingLeft', $(event.currentTarget).val()+'px');
        },
        changeBlockPaddingTop: function(event) {
            this.model.set('blockPaddingTop', $(event.currentTarget).val()+'px');
        },
        changeBlockPaddingRight: function(event) {
            this.model.set('blockPaddingRight', $(event.currentTarget).val()+'px');
        },
        changeBlockPaddingBottom: function(event) {
            this.model.set('blockPaddingBottom', $(event.currentTarget).val()+'px');
        },
        changeBlockPaddingLeft: function(event) {
            this.model.set('blockPaddingLeft', $(event.currentTarget).val()+'px');
        },
        changeBlockMarginTop: function(event) {
            this.model.set('blockMarginTop', $(event.currentTarget).val()+'px');
        },
        changeBlockTitlePaddingTop: function(event) {
            this.model.set('blockTitlePaddingTop', $(event.currentTarget).val()+'px');
        },
        changeBlockTitlePaddingRight: function(event) {
            this.model.set('blockTitlePaddingRight', $(event.currentTarget).val()+'px');
        },
        changeBlockTitlePaddingBottom: function(event) {
            this.model.set('blockTitlePaddingBottom', $(event.currentTarget).val()+'px');
        },
        changeBlockTitlePaddingLeft: function(event) {
            this.model.set('blockTitlePaddingLeft', $(event.currentTarget).val()+'px');
        },
        changeComponentMarginTop: function(event) {
            this.model.set('componentMarginTop', $(event.currentTarget).val()+'px');
        },
        changeSmartComponentSpacing: function(event) {
            this.model.set('smartComponentSpacing', $(event.currentTarget).val()+'px');
        },
        changeTextMarginTop: function(event) {
            this.model.set('textMarginTop', $(event.currentTarget).val()+'px');
        },
        changeTextTitleSize: function(event) {
            this.model.set('textTitleSize', $(event.currentTarget).val()+'px');
        },
        changeTextTitleColor: function(event) {
            this.model.set('textTitleColor', $(event.currentTarget).val());
        },
        changeGraphicMarginTop: function(event) {
            this.model.set('graphicMarginTop', $(event.currentTarget).val()+'px');
        },
        changeGraphicTitleSize: function(event) {
            this.model.set('graphicTitleSize', $(event.currentTarget).val()+'px');
        },
        changeGraphicTitleColor: function(event) {
            this.model.set('graphicTitleColor', $(event.currentTarget).val());
        },
        changeMediaMarginTop: function(event) {
            this.model.set('mediaMarginTop', $(event.currentTarget).val()+'px');
        },
        changeMediaTitleSize: function(event) {
            this.model.set('mediaTitleSize', $(event.currentTarget).val()+'px');
        },
        changeMediaTitleColor: function(event) {
            this.model.set('mediaTitleColor', $(event.currentTarget).val());
        },
        changeNarrativeMarginTop: function(event) {
            this.model.set('narrativeMarginTop', $(event.currentTarget).val()+'px');
        },
        changeNarrativeTitleSize: function(event) {
            this.model.set('narrativeTitleSize', $(event.currentTarget).val()+'px');
        },
        changeNarrativeTitleColor: function(event) {
            this.model.set('narrativeTitleColor', $(event.currentTarget).val());
        },
        changeNarrativeControlsColor: function(event) {
            this.model.set('narrativeControlsColor', $(event.currentTarget).val());
        },
        changeNarrativeControlsIconColor: function(event) {
            this.model.set('narrativeControlsIconColor', $(event.currentTarget).val());
        },
        changeNarrativeControlsIconHoverColor: function(event) {
            this.model.set('narrativeControlsIconHoverColor', $(event.currentTarget).val());
        },
        changeNarrativeMobileIconColor: function(event) {
            this.model.set('narrativeMobileIconColor', $(event.currentTarget).val());
        },
        changeNarrativeMobileIconHoverColor: function(event) {
            this.model.set('narrativeMobileIconHoverColor', $(event.currentTarget).val());
        },
        changeNarrativeStraplineBackgroundColor: function(event) {
            this.model.set('narrativeStraplineBackgroundColor', $(event.currentTarget).val());
        },
        changeNarrativeStraplineTextColor: function(event) {
            this.model.set('narrativeStraplineTextColor', $(event.currentTarget).val());
        },
        changeNarrativePopupBackgroundColor: function(event) {
            this.model.set('narrativePopupBackgroundColor', $(event.currentTarget).val());
        },
        changeNarrativePopupTextColor: function(event) {
            this.model.set('narrativePopupTextColor', $(event.currentTarget).val());
        },
        changeNarrativePopupIconColor: function (event) {
            this.model.set('narrativePopupIconColor', $(event.currentTarget).val());
        },
        changeNarrativePopupIconHoverColor: function (event) {
            this.model.set('narrativePopupIconHoverColor', $(event.currentTarget).val());
        },
        changeHotGraphicMarginTop: function(event) {
            this.model.set('hotGraphicMarginTop', $(event.currentTarget).val()+'px');
        },
        changeHotGraphicTitleSize: function(event) {
            this.model.set('hotGraphicTitleSize', $(event.currentTarget).val()+'px');
        },
        changeHotGraphicTitleColor: function(event) {
            this.model.set('hotGraphicTitleColor', $(event.currentTarget).val());
        },
        changeHotGraphicPinColor: function (event) {
            this.model.set('hotGraphicPinColor', $(event.currentTarget).val());
        },
        changeHotGraphicPinHoverColor: function (event) {
            this.model.set('hotGraphicPinHoverColor', $(event.currentTarget).val());
        },
        changeHotGraphicPinSize: function (event) {
            this.model.set('hotGraphicPinSize', $(event.currentTarget).val()+'px');
        },
        changeHotGraphicPopupBackgroundColor: function (event) {
            this.model.set('hotGraphicPopupBackgroundColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupBorderColor: function (event) {
            this.model.set('hotGraphicPopupBorderColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupToolbarBackgroundColor: function (event) {
            this.model.set('hotGraphicPopupToolbarBackgroundColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupToolbarIconColor: function (event) {
            this.model.set('hotGraphicPopupToolbarIconColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupToolbarIconHoverColor: function (event) {
            this.model.set('hotGraphicPopupToolbarIconHoverColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupToolbarTextColor: function (event) {
            this.model.set('hotGraphicPopupToolbarTextColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupTextColor: function (event) {
            this.model.set('hotGraphicPopupTextColor', $(event.currentTarget).val());
        },
        changeHotGraphicPopupPadding: function (event) {
            this.model.set('hotGraphicPopupPadding', $(event.currentTarget).val());
        },
        changeHotGraphicPopupSpacing: function (event) {
            this.model.set('hotGraphicPopupSpacing', $(event.currentTarget).val());
        },
        changeAccordionMarginTop: function(event) {
            this.model.set('accordionMarginTop', $(event.currentTarget).val()+'px');
        },
        changeAccordionTitleSize: function(event) {
            this.model.set('accordionTitleSize', $(event.currentTarget).val()+'px');
        },
        changeAccordionTitleColor: function(event) {
            this.model.set('accordionTitleColor', $(event.currentTarget).val());
        },
        changeAccordionIconColor: function(event) {
            this.model.set('accordionIconColor', $(event.currentTarget).val());
        },
        changeAccordionIconHoverColor: function(event) {
            this.model.set('accordionIconHoverColor', $(event.currentTarget).val());
        },
        changeAccordionIconVisitedColor: function(event) {
            this.model.set('accordionIconVisitedColor', $(event.currentTarget).val());
        },
        changeAccordionItemBackgroundColor: function (event) {
            this.model.set('accordionItemBackgroundColor', $(event.currentTarget).val());
        },
        changeAccordionItemHoverBackgroundColor: function (event) {
            this.model.set('accordionItemHoverBackgroundColor', $(event.currentTarget).val());
        },
        changeAccordionItemVisitedBackgroundColor: function (event) {
            this.model.set('accordionItemVisitedBackgroundColor', $(event.currentTarget).val());
        },
        changeAccordionItemTitleTextColor: function (event) {
            this.model.set('accordionItemTitleTextColor', $(event.currentTarget).val());
        },
        changeAccordionItemTitleTextHoverColor: function (event) {
            this.model.set('accordionItemTitleTextHoverColor', $(event.currentTarget).val());
        },
        changeAccordionItemTitleTextVisitedColor: function (event) {
            this.model.set('accordionItemTitleTextVisitedColor', $(event.currentTarget).val());
        },
        changeAccordionItemBodyTextColor: function (event) {
            this.model.set('accordionItemBodyTextColor', $(event.currentTarget).val());
        },
        changeAccordionItemBodyBackgroundColor: function (event) {
            this.model.set('accordionItemBodyBackgroundColor', $(event.currentTarget).val());
        },
        changeAccordionItemBodyPadding: function(event) {
            this.model.set('accordionItemBodyPadding', $(event.currentTarget).val()+'px');
        },
        changeAccordionItemSpacing: function(event) {
            this.model.set('accordionItemSpacing', $(event.currentTarget).val()+'px');
        },
        changeAccordionItemBorderColor: function(event) {
            this.model.set('accordionItemBorderColor', $(event.currentTarget).val());
        },
        changeMcqMarginTop: function(event) {
            this.model.set('mcqMarginTop', $(event.currentTarget).val()+'px');
        },
        changeMcqTitleSize: function(event) {
            this.model.set('mcqTitleSize', $(event.currentTarget).val()+'px');
        },
        changeMcqTitleColor: function(event) {
            this.model.set('mcqTitleColor', $(event.currentTarget).val());
        },
        changeMcqIconColor: function (event) {
            this.model.set('mcqIconColor', $(event.currentTarget).val());
        },
        changeMcqCorrectIconColor: function (event) {
            this.model.set('mcqCorrectIconColor', $(event.currentTarget).val());
        },
        changeMcqIncorrectIconColor: function (event) {
            this.model.set('mcqIncorrectIconColor', $(event.currentTarget).val());
        },
        changeMcqIconHoverColor: function (event) {
            this.model.set('mcqIconHoverColor', $(event.currentTarget).val());
        },
        changeMcqIconSelectedColor: function (event) {
            this.model.set('mcqIconSelectedColor', $(event.currentTarget).val());
        },
        changeMcqItemTextColor: function (event) {
            this.model.set('mcqItemTextColor', $(event.currentTarget).val());
        },
        changeMcqItemTextHoverColor: function (event) {
            this.model.set('mcqItemTextHoverColor', $(event.currentTarget).val());
        },
        changeMcqItemTextSelectedColor: function (event) {
            this.model.set('mcqItemTextSelectedColor', $(event.currentTarget).val());
        },
        changeMcqItemBackgroundColor: function (event) {
            this.model.set('mcqItemBackgroundColor', $(event.currentTarget).val());
        },
        changeMcqItemHoverBackgroundColor: function (event) {
            this.model.set('mcqItemHoverBackgroundColor', $(event.currentTarget).val());
        },
        changeMcqItemSelectedBackgroundColor: function (event) {
            this.model.set('mcqItemSelectedBackgroundColor', $(event.currentTarget).val());
        },
        changeMcqButtonBackgroundColor: function (event) {
            this.model.set('mcqButtonBackgroundColor', $(event.currentTarget).val());
        },
        changeMcqButtonBackgroundHoverColor: function (event) {
            this.model.set('mcqButtonBackgroundHoverColor', $(event.currentTarget).val());
        },
        changeMcqButtonTextColor: function (event) {
            this.model.set('mcqButtonTextColor', $(event.currentTarget).val());
        },
        changeMcqButtonTextHoverColor: function (event) {
            this.model.set('mcqButtonTextHoverColor', $(event.currentTarget).val());
        },
        changePpqMarginTop: function(event) {
            this.model.set('ppqMarginTop', $(event.currentTarget).val()+'px');
        },
        changePpqTitleSize: function(event) {
            this.model.set('ppqTitleSize', $(event.currentTarget).val()+'px');
        },
        changePpqTitleColor: function(event) {
            this.model.set('ppqTitleColor', $(event.currentTarget).val());
        },
        changePpqPinColor: function(event) {
            this.model.set('ppqPinColor', $(event.currentTarget).val());
        },
        changePpqPinHoverColor: function(event) {
            this.model.set('ppqPinHoverColor', $(event.currentTarget).val());
        },
        changePpqPinCorrectColor: function(event) {
            this.model.set('ppqPinCorrectColor', $(event.currentTarget).val());
        },
        changePpqPinIncorrectColor: function(event) {
            this.model.set('ppqPinIncorrectColor', $(event.currentTarget).val());
        },
        changePpqButtonBackgroundColor: function (event) {
            this.model.set('ppqButtonBackgroundColor', $(event.currentTarget).val());
        },
        changePpqButtonBackgroundHoverColor: function (event) {
            this.model.set('ppqButtonBackgroundHoverColor', $(event.currentTarget).val());
        },
        changePpqButtonTextColor: function (event) {
            this.model.set('ppqButtonTextColor', $(event.currentTarget).val());
        },
        changePpqButtonTextHoverColor: function (event) {
            this.model.set('ppqButtonTextHoverColor', $(event.currentTarget).val());
        },
        changeGuideBackgroundColor: function (event) {
            this.model.set('guideBackgroundColor', $(event.currentTarget).val());
        },
        changeGuideTitleTextSize: function (event) {
            this.model.set('guideTitleTextSize', $(event.currentTarget).val());
        },
        changeGuideBodyTextSize: function (event) {
            this.model.set('guideBodyTextSize', $(event.currentTarget).val());
        },
        changeGuideTextColor: function (event) {
            this.model.set('guideTextColor', $(event.currentTarget).val());
        },
        changeGuideBackgroundColor: function (event) {
            this.model.set('guideBackgroundColor', $(event.currentTarget).val());
        },
        changeGuideIconColor: function (event) {
            this.model.set('guideIconColor', $(event.currentTarget).val());
        },
        changeGuideIconHoverColor: function (event) {
            this.model.set('guideIconHoverColor', $(event.currentTarget).val());
        },
        changeGuideFooterBackgroundColor: function (event) {
            this.model.set('guideFooterBackgroundColor', $(event.currentTarget).val());
        },
        changeGuideFooterProgressColor: function (event) {
            this.model.set('guideFooterProgressColor', $(event.currentTarget).val());
        },
        changeGuideFooterProgressSelectedColor: function (event) {
            this.model.set('guideFooterProgressSelectedColor', $(event.currentTarget).val());
        },
        changeGuideButtonBackgroundColor: function (event) {
            this.model.set('guideButtonBackgroundColor', $(event.currentTarget).val());
        },
        changeGuideButtonBackgroundHoverColor: function (event) {
            this.model.set('guideButtonBackgroundHoverColor', $(event.currentTarget).val());
        },
        changeGuideButtonTextColor: function (event) {
            this.model.set('guideButtonTextColor', $(event.currentTarget).val());
        },
        changeGuideButtonTextHoverColor: function (event) {
            this.model.set('guideButtonTextHoverColor', $(event.currentTarget).val());
        },
        changeTutorBackgroundColor: function (event) {
            this.model.set('tutorBackgroundColor', $(event.currentTarget).val());
        },
        changeTutorTitleTextSize: function (event) {
            this.model.set('tutorTitleTextSize', $(event.currentTarget).val());
        },
        changeTutorBodyTextSize: function (event) {
            this.model.set('tutorBodyTextSize', $(event.currentTarget).val());
        },
        changeTutorTextColor: function (event) {
            this.model.set('tutorTextColor', $(event.currentTarget).val());
        },
        changeTutorBackgroundColor: function (event) {
            this.model.set('tutorBackgroundColor', $(event.currentTarget).val());
        },
        changeTutorIconColor: function (event) {
            this.model.set('tutorIconColor', $(event.currentTarget).val());
        },
        changeTutorIconHoverColor: function (event) {
            this.model.set('tutorIconHoverColor', $(event.currentTarget).val());
        },
        changeMessagesToolbarBackgroundColor: function (event) {
            this.model.set('messagesToolbarBackgroundColor', $(event.currentTarget).val());
        },
        changeMessagesToolbarTextColor: function (event) {
            this.model.set('messagesToolbarTextColor', $(event.currentTarget).val());
        },
        changeMessagesToolbarIconColor: function (event) {
            this.model.set('messagesToolbarIconColor', $(event.currentTarget).val());
        },
        changeMessagesToolbarIconHoverColor: function (event) {
            this.model.set('messagesToolbarIconHoverColor', $(event.currentTarget).val());
        },
        changeMessagesDivideBackgroundColor: function (event) {
            this.model.set('messagesDivideBackgroundColor', $(event.currentTarget).val());
        },
        changeMessagesDivideTextColor: function (event) {
            this.model.set('messagesDivideTextColor', $(event.currentTarget).val());
        },
        changeMessagesMessageBackgroundColor: function (event) {
            this.model.set('messagesMessageBackgroundColor', $(event.currentTarget).val());
        },
        changeMessagesMessageTextColor: function (event) {
            this.model.set('messagesMessageTextColor', $(event.currentTarget).val());
        },
        changeMessagesMessageUnreadBackgroundColor: function(event) {
            this.model.set('messagesMessageUnreadBackgroundColor', $(event.currentTarget).val());
        },
        changeMessagesMessageUnreadTextColor: function(event) {
            this.model.set('messagesMessageUnreadTextColor', $(event.currentTarget).val());
        }
    });
    
    var ThemeBuilderGlobalViewStyle = Backbone.View.extend({
        el: '#stitch-results',
        initialize: function () {
            this.render();
            this.model.on('change', this.render, this);
        },
        render: function () {
            var data = this.model.toJSON();
            //var template = Handlebars.compile($("#stitch-style-template").html());
            var template = Handlebars.templates['stitchcss']
            $(this.el).html(template(data));
            this.model.trigger('update');
            return this;
        }
    })
    // Set main view up and set defaults
    new ThemeBuilderGlobalView({
        model:new ThemeBuilder()
    });
    
}

$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle) {
            var bg = elem.currentStyle["background-color"];
        } else if (window.getComputedStyle) {
            var bg = document.defaultView.getComputedStyle(elem, null).getPropertyValue("background-color");
        }
        if (bg.indexOf("rgba") >= 0) {
            return '';
        } else
        if (bg.search("rgb") == -1) {
            return bg;
        } else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}

$.cssHooks.color = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}

$.cssHooks.borderBottomColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["border-bottom-color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("border-bottom-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}

$.cssHooks.borderColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["border-color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("border-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}

Handlebars.registerHelper("parseInt", function(string) {
    return parseInt(string);
});

$(window).load(function(){
    initThemeBuilder();
});
