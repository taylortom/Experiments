var Spoor = Backbone.Model.extend({
    defaults:{
        initialised: false,
        completionString: "",
        completionData: {},
        SCOFinishCalled: false,
        fromLMS: true
    },
    url: "spoor/scormData.json",
    initialize: function(){
        _.bindAll(this);
        this.fetch();
    },
    init:function(){
        console.log("Spoor:: init");
        var that = this;
        if(Adapt.Course !== undefined && Adapt.Course.get('dataReady') && _.isEmpty(this.get('completionData'))){
            console.log("SCORM initialised after Adapt.dataReady triggered");
            that.onDataReady();
        } else {        
            Adapt.on('dataReady', function(){
                console.log("Adapt.dataReady triggered after SCORM initialised");
                that.onDataReady();
            });
        }
        
        Adapt.on('itemComplete', function (parameters){
            console.log(parameters.type + ", id: " + parameters.id + " completed.");
            if(!that.get('fromLMS')) {
                console.log("itemIsComplete: " + that.itemIsComplete(that.get('completionData'), parameters.id));
                if(!that.itemIsComplete(that.get('completionData'), parameters.id)){
                    that.set('completionString', "");
                    if(parameters.type === "course") {
                        that.onCourseComplete();
                    } else {
                        that.findItemAndMarkAsComplete(that.get('completionData'), parameters.id, false);
                        if(!that.get('completionData').complete) {
                            that.createCompletionString(that.get('completionData'));
                            that.sendCompletionData();
                        }
                    }
                }
            }
        });
        Adapt.Course.on('change:onQuizComplete', function(){
        });
    },
    onCourseComplete: function(){
        this.get('completionData').complete = true;
        this.set('completionString', 'courseComplete');
        this.sendCompletionData();
        
        var needModsComplete = this.get('tracking').requireAllModulesCompleted;
        var needQuizPassed = this.get('tracking').requireQuizPassed;
        if(_.isString(needModsComplete)) needModsComplete = this.parseBool(needModsComplete);
        if(_.isString(needQuizPassed)) needQuizPassed = this.parseBool(needQuizPassed);
        
        if(needModsComplete){
            if(needQuizPassed){
                // do stuff with the quiz
            } else {
                this.setLessonStatus(this.get('reporting').onTrackingCriteriaMet);
            }  
        }
    },
    sendCompletionData: function(){
        var sw = ScormWrapper.getInstance();
        
        console.log("completionString: " + this.get('completionString'));
        this.set('oldSusData', this.get('completionString'));
        ScormWrapper.getInstance().setSuspendData(this.get('completionString'));
    },    
    setLessonStatus:function(status){
        switch (status){
            case "incomplete":
                ScormWrapper.getInstance().setIncomplete();
            break;
            case "completed":
                ScormWrapper.getInstance().setCompleted();
            break;
            case "passed":
                ScormWrapper.getInstance().setPassed();
            break;
            case "failed":
                ScormWrapper.getInstance().setFailed();
            break;
            default:
                console.log("cmi.core.lesson_status of " + status + " is not supported.");
            break;
        }
    },
    SCOStart: function() {
        var sw = ScormWrapper.getInstance();
        sw.setVersion("1.2");
        sw.initialize();
        this.set('initialised', true);
        var lessonStatus = sw.getStatus().toLowerCase();
        
        if (lessonStatus == "not attempted" || lessonStatus == "unknown") {
            sw.setIncomplete();
        }
        
        this.init();
    },
    onDataReady: function(){
        this.set('oldSusData', ScormWrapper.getInstance().getSuspendData());
        this.set('completionData', Adapt.Course.toSpecifiedJSON(['id', 'complete']));
        this.repopulateCompletionData();
        console.log(this.get('completionData'));
    },
    repopulateCompletionData: function(){
        if (!_.isEmpty(this.get('oldSusData'))){
            if(this.get('oldSusData') === "courseComplete"){
                this.markAllAsComplete(this.get('completionData'));
            } else {
                var susDataItems = this.get('oldSusData').split('|');
                var that = this;
                _.each(susDataItems, function(item){
                    that.findItemAndMarkAsComplete(that.get('completionData'), item, true);
                });
            }
            Adapt.Course.populateFromSpecifiedJSON(this.get('completionData'), ['id', 'complete']);
        }
        this.set('fromLMS', false);
    },
    SCOFinish:function() {
        if (!this.get('SCOFinishCalled')) {
            this.set('SCOFinishCalled', true);
            ScormWrapper.getInstance().finish();
        }
    },
    findItemAndMarkAsComplete: function(startItem, completeItemID, includeChildren){
        var matchFound = (startItem.id === completeItemID) ? "Match Found!" : "";
        //console.log("Spoor:: findItemAndMarkAsComplete. Compare " + startItem.id + " to " + completeItemID + ". " + matchFound);
        
        if(startItem.id === completeItemID){
            // found item, mark as complete
            startItem.complete = true;
            if(includeChildren) {
                // if including children, mark them as complete too (will depth-first mark kids as complete)...
                if(startItem.children !== undefined) {
                    // ... as long as there are kids
                    for(var i = 0; i < startItem.children.length; i++){
                        this.findItemAndMarkAsComplete(startItem.children[i], startItem.children[i].id, true);
                    }
                }
            }
            // tell the parent that we found a match
            return true;
        }
        else{
            // we didn't find the item here, search child objects...
            if(startItem.children !== undefined) {
                //... provided there are some
                for(var i = 0; i < startItem.children.length; i++){
                    if(this.findItemAndMarkAsComplete(startItem.children[i], completeItemID, includeChildren)){
                        // if a match was found below, return true (so parent knows)
                        return true;
                    }
                }
            }
        }
    },
    itemIsComplete: function(startItem, idToLookFor){
        if(startItem.id === idToLookFor){
            if(startItem.complete) {
                return true;
            } else { 
                return false;
            }
        } else { 
            if(startItem.children !== undefined){
                for(var i = 0; i < startItem.children.length; i++){
                    if(this.itemIsComplete(startItem.children[i], idToLookFor)){
                        // if a match was found below, return true (so parent knows)
                        return true;
                    }
                }
            }
        }
        return false;
    },
    markAllAsComplete: function(startItem){
        startItem.complete = true;
        if(startItem.children !== undefined) {
            for (var i = 0; i < startItem.children.length; i++) {
                this.markAllAsComplete(startItem.children[i]);
            }
        }
    },
    createCompletionString: function(startItem){
//        console.log("Completion string creation. startItem.id: " + startItem.id + ", complete: " + startItem.complete);
        if(startItem.complete) {
            var delimeter = _.isEmpty(this.get('completionString')) ? "" : "|";
            if(this.get('completionString').indexOf(startItem.id) === -1){
                this.set('completionString', this.get('completionString') + delimeter + startItem.id);
                return;
            }
        } else if (startItem.children !== undefined) {
            for (var i = 0; i < startItem.children.length; i++) {
                this.createCompletionString(startItem.children[i]);
            }
        }
    },
    parseBool: function(str) {
        if (typeof str === 'string' && str.toLowerCase() == 'true')
            return true;
        return (parseInt(str) > 0);
    }
});

Adapt.Spoor = new Spoor();