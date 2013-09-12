Adapt.confidence = ComponentView.extend({
    tagName: "div",
    className: "component confidence",
    init: function () {
        if (!this.model.get('initial')) {
            this.listenTo(this.model, 'change:score', this.render);
            this.listenTo(this.model, 'moveMarker', this.moveMarker);
        }
    },
    events: {
        'click .submit': 'submit',
        'mousedown .slider.handle': 'handleClick',
        'click .slider.scale': 'sliderClick',
        'click .icon-plus': 'upClick',
        'click .icon-minus': 'downClick'
    },
    setup: function () {
        if (!this.model.get('active')) {
            this.model.set('active', true);
            this.initSetup();
        } else {
            this.update();
        }
        this.model.set('ready', true);
    },
    initSetup: function () {
        var width = $('.slider.scale', this.el).width();
        var left = this.model.get('score');
        $('.slider.handle', this.el).css({
            left: left + 'px'
        }).children('span').html(Math.round(100 * left / width));
        if (this.model.initial) $('.slider.handle', this.el).css({
                visibility: 'hidden'
            });
    },
    update: function () {
        var width = $('.slider.scale', this.el).width();
        var position = this.model.get('position');
        $('.slider.handle', this.el).css({
            left: position + 'px'
        }).children('span').html(Math.round(100 * position / width));
    },
    handleClick: function (event) {
        event.preventDefault();
        if (this.model.get('initial') == false) {
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            console.log(linkedComponent)
            if (linkedComponent.get('complete') == false) {
                alert(this.model.get('error'));
                return;
            }
        }
        var $that = this;
        var width;
        var left;
        $(document).on('mousemove', function (event) {
            width = $('.slider.scale', $that.el).width();
            var offset = $('.slider.scale', $that.el).offset().left;
            left = Math.max(Math.min((event.pageX - offset), width), 0);
            $('.slider.handle', $that.el).css({
                left: left + 'px'
            }).children('span').html(Math.round(100 * left / width));
        })
        $(document).one('mouseup', function () {
            $(document).off('mousemove');
            $that.model.set();
            $that.model.set({
                'score': Math.round(100 * left / width),
                'position': left
            });
            if ($that.model.get('initial')) {
                var linkedComponent = Adapt.Components.where({
                    link: $that.model.get('link'),
                    initial: false
                })[0];
                linkedComponent.set({
                    'score': $that.model.get('score'),
                    'position': left
                });
            }
        });
    },
    sliderClick: function (event) {
        if (this.model.get('initial') == false) {
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            console.log(linkedComponent)
            if (linkedComponent.get('complete') == false) {
                alert(this.model.get('error'));
                return;
            }
        }
        var width = $('.slider.scale', this.el).width();
        var offset = $('.slider.scale', this.el).offset().left;
        var Left = Math.max(Math.min((event.pageX - offset), width), 0);
        $('.slider.handle', this.el).css({
            left: Left + 'px'
        }).children('span').html(Math.round(100 * Left / width))
    },
    upClick: function (event) {
        event.preventDefault();
        if (this.model.get('initial') == false) {
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            console.log(linkedComponent)
            if (linkedComponent.get('complete') == false) {
                alert(this.model.get('error'));
                return;
            }
        }
        this.moveHandleBy(10, true);

    },
    downClick: function (event) {
        event.preventDefault();
        if (this.model.get('initial') == false) {
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            console.log(linkedComponent)
            if (linkedComponent.get('complete') == false) {
                alert(this.model.get('error'));
                return;
            }
        }
        this.moveHandleBy(10, false);
    },

    // NB: takes a percentage value
    moveHandleBy: function (amountToMove, increment) {
        var width = $('.slider.scale', this.el).width();
        var incAmountPx = (amountToMove / 100) * width;
        if (!increment) incAmountPx *= -1;
        var offsetLeft = $('.slider.scale', this.el).offset().left;
        var handleLeft = $('.slider.handle', this.el).offset().left;

        // need to take into account that the handle will be positioned from the left
        var buffer = $('.slider.handle', this.el).width() / 2;
        if (increment) buffer *= -1;

        var left = Math.max(Math.min((((handleLeft - buffer) + incAmountPx) - offsetLeft), width), 0);
        var label = Math.round(100 * left / width);
        $('.slider.handle', this.el).css({
            left: left + 'px'
        }).children('span').html(label);

        this.model.set({
            'score': label,
            'position': left
        });
    },

    disable: function () {

        $('.submit', this.el).css({
            visibility: 'hidden'
        });
        $('.icon-plus', this.el).css({
            visibility: 'hidden'
        });
        $('.icon-minus', this.el).css({
            visibility: 'hidden'
        });
        $('.slider.handle', this.el).css({
            cursor: 'default'
        });
        this.$el.unbind('mousedown');
        this.$el.unbind('click');
    },

    submit: function (event) {

        event.preventDefault();
        if (!this.model.get('initial')) {
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            console.log(linkedComponent)
            if (linkedComponent.get('complete') == false) {
                alert(this.model.get('error'));
                return;
            }
        }
        this.disable();

        if (!this.model.get('initial')) {

            // Get the scores
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: true
            })[0];
            var initialScore = linkedComponent.get('score');
            var finalScore = this.model.get('score');
            var feedbackType = '';

            // set the feeback type
            if (initialScore < finalScore) feedbackType = 'increase';
            else if (initialScore > finalScore) feedbackType = 'decrease';
            else feedbackType = 'same';
            this.model.set('complete', true);
            new TutorModel({
                title: this.model.get('title'),
                message: this.model.get('feedback')[feedbackType]
            });
        } else {

            // Get the scores
            var linkedComponent = Adapt.Components.where({
                link: this.model.get('link'),
                initial: false
            })[0];
            this.model.set('complete', true);
            linkedComponent.trigger('moveMarker');
        }
    },

    moveMarker: function () {

        console.log('moveMarker');

        this.stopListening(this.model, 'change:score', this.render);

        var left = $('.slider.handle', this.el).css('left');

        $('.slider.marker', this.el).css({
            visibility: 'visible',
            left: left
        });
    }
})