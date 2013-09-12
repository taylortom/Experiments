Adapt.mcq = QuestionView.extend({
  
  init: function () {
        this.model.set('selected',0);
        if(_.isString(this.model.get('feedback').partly)) 
            this.model.get('feedback').partly = [this.model.get('feedback').partly, this.model.get('feedback').partly] 
        if(_.isString(this.model.get('feedback').incorrect)) 
            this.model.get('feedback').incorrect = [this.model.get('feedback').incorrect, this.model.get('feedback').incorrect]
        if(!this.model.get("complete")) this.reset();
  },

  addEvents: {
    'focus .item input':'itemHighlighted',
    'blur .item input':'itemDeHighlighted',
    'change .item input':'itemSelected'
  },

  preRender:function(){
    if(this.model.get('random')) this.model.set("items", _.shuffle(this.model.get("items")));
  },
  itemHighlighted: function(event) {
    $(event.currentTarget).prev('label').addClass('highlighted');
  },
  itemDeHighlighted: function(event) {
    $(event.currentTarget).prev('label').removeClass('highlighted');
  },
  itemSelected:function (event) {
    var that = this;
    if(!this.model.get('complete') && !this.model.get('submitted')){
      if(!$(event.currentTarget).siblings('label').hasClass('selected')){
        if(that.model.get('selectable') === 1){
          $('label', that.el).removeClass('selected');
          $('input', that.el).prop('checked', false);
          that.model.get('selected').selected = false;
          that.model.set('selected',  that.model.get('items')[$(event.currentTarget).parent('.item').index()]);
          that.model.get('selected').selected = true;
          $(event.currentTarget).siblings('label').addClass('selected');         
        } else 
        if(that.model.get('selected') < this.model.get('selectable')){
          that.model.get('items')[$(event.currentTarget).parent('.item').index()].selected = true;
          that.model.set('selected', that.model.get('selected') + 1);
          $(event.currentTarget).siblings('label').addClass('selected');
        };
      } else {
        that.model.get('items')[$(event.currentTarget).parent('.item').index()].selected = false;
        that.model.set('selected', that.model.get('selected') - 1);            
        $(event.currentTarget).siblings('label').removeClass('selected');
      };
    }
  },

  canSubmit: function() {
    return !!this.model.get("selected"); 
  },

  score: function() {
    var that = this;
    this.model.set("score", 0);
    _.each(this.model.get("items"), function(item, i){
      if (item.selected && item.correct) {
        that.model.set("score", that.model.get("score") + 1);
        that.model.set("partCorrect", true);
      } else 
      if (item.selected && !item.correct) {
        that.model.set("score", that.model.get("score") - 1);
      } else 
      if (!item.selected && !item.correct) {
        that.model.set("score", that.model.get("score") + 1);
      } else 
      if(!item.selected && item.correct) {
        that.model.set("score", that.model.get("score") - 1);
      }
    });
    this.model.set("correct", false);
    if(this.model.get("score") == this.model.get("items").length)
      this.model.set("correct", true);
  },

  markItems: function() {
    var that = this;
    _.each(this.model.get('items'), function(item, i){
      if(item.correct) $('.item', that.el).eq(i).addClass('correct');
      else $('.item', that.el).eq(i).addClass('incorrect');
    });
  },

  resetItems: function() { 
    $('.item label', this.el).removeClass('selected');
    $('input', this.el).prop('checked', false);
    _.each(this.model.get('items'), function(item){
      item.selected = false;
    });
  }

}); 
