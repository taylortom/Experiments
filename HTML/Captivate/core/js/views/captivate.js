Adapt.captivate = ComponentView.extend
({  
	tagName: "div",
    className: "component captivate",
    
	events: 
	{
		'click .open':'open'
	},

    setup: function () 
	{	
        console.log(this.className + '.setup: ' + this.model.get('id'));

		this.model.set('score', 0);
		
		window.stepCompleted = _.bind(this.onStepCompleted, this);
		window.setCompleted = _.bind(this.onSetCompleted, this);
		
		$('.button.open', this.$el).css('display','inline-block');

        this.showNav(false);

		this.model.set('ready', true);
    },

    open: function(event)
    {   
    	console.log(this.className + ".open");    
        event.preventDefault();

        var $block = this.$el.closest('.block');

        // swap the text 
        $('.title', $block).children(':first').text(this.model.get('title'));
        $('.body', $block).children(':first').text(this.model.get('body'));

		var iframe = $('.widget .captivateContainer', this.$el);
		iframe.css('visibility', 'visible');

		$('.button.open', this.$el).css('display','none');
    },

    showNav: function(show) 
    {
        console.log(this.className + ".showNav: " + show);

        var $nav = this.$el.closest('.article').find('.block-slider-controls');
        var visibility = (show == false) ? 'hidden' : 'visible';

        $nav.css('visibility', visibility);
    },

    onStepCompleted: function (score) 
	{
		var currentScore = this.model.get('score');
		this.model.set('score', currentScore + score);
		
        console.log(this.className + ".onStepCompleted: new score: " + this.model.get('score'));
    },
	
	onSetCompleted: function () 
	{
        console.log(this.className + ".onSetCompleted");
        this.showNav();
    }
});