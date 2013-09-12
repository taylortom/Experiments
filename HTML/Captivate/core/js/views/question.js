var QuestionView = ComponentView.extend({
    
    tagName: "div",
  
    className: function() {
      return "component "+this.model.get("component");
    },
  
    baseEvents: {
      "click .widget .button.submit":"submit",
      "click .widget .button.reset":"reset",
      "click .widget .button.model":"modelAns",
      "click .widget .button.user":"userAns"
    },

    addEvents:{},

    events: function(){
        return _.extend({}, this.addEvents, 
            QuestionView.prototype.baseEvents);
    },
  
    submit: function(event) {
      console.log("QuestionComp:: method:submit");
      event.preventDefault();
      if(!this.canSubmit()) return;
      var that = this;
      this.model.set({
          submitted: true,
          attempts: this.model.get("attempts") - 1
      });
      $(".widget", this.el).addClass("submitted");

      this.score();

      this.model.get("correct") ? this.correct() : this.incorrect();

      this.feedback();
    },

    complete: function(correct) {
      console.log("QuestionComp:: method:complete");
      this.markItems();
      this.model.set({
        complete: true
      });
      $(".widget", this.el).addClass("complete");
      if(correct) $(".widget", this.el).addClass("correct");
      this.userAns();
    },

    correct: function() {
      console.log("QuestionComp:: method:correct");
      this.complete(true);
      this.model.set("tutorMessage", this.model.get("feedback").correct);
    },

    incorrect: function() {
      console.log("QuestionComp:: method:incorrect");
      if(this.model.get("attempts") < 1) {
        this.complete();
      };
      this.model.set("tutorMessage", this.model.get("feedback").incorrect[Math.ceil(this.model.get("attempts")/10)]);
      if(this.model.get("partCorrect")) this.partCorrect();
    },

    partCorrect: function() {              
      if(this.model.get("feedback").partly)
        this.model.set("tutorMessage", this.model.get("feedback").partly[Math.ceil(this.model.get("attempts")/10)]);
    },

    feedback: function() {
      console.log("QuestionComp:: method:feedback");
      if(this.model.get("assessment")) return this.assessment();          
      this.model.set('tutorAudio', this.model.get("feedback").audio)
      if(this.model.get('selectable') === 1 && this.model.get('selected').feedback)
          this.model.set('tutorMessage', this.model.get('selected').feedback);
      if(this.model.get('selectable') === 1 && this.model.get('selected').audio)
          this.model.set('tutorAudio', this.model.get('selected').audio);
      new TutorModel({
          title: this.model.get('title'), 
          message: this.model.get('tutorMessage'),
          audio: this.model.get('tutorAudio')
      });
    },

    assessment: function() {
      alert("Assessment feedback");
    },

    reset: function(event) {
      if(event) event.preventDefault(); 
      this.model.set({
        submitted: false,
        correct: false,
        partCorrect: false
      });
      $(".widget", this.el).removeClass("submitted");
      this.resetItems();
    },

    modelAns: function(event) {
      if(event) event.preventDefault();
      $(".widget", this.el).removeClass("user").addClass("model");
      this.modelAnswer();
    },

    userAns: function(event) {
      if(event) event.preventDefault();
      $(".widget", this.el).removeClass("model").addClass("user");
      this.userAnswer();
    },

    userAnswer: function(){},

    modelAnswer: function(){},

    resetItems: function(){}
});
