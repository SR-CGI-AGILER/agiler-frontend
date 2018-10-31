import Controller from '@ember/controller';

import Ember from 'ember'
export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    store: Ember.inject.service(),

    projectDetails: [],
   
    actions: {
        showPromptDialogAction(){
            this.toggleProperty('showPromptDialog');
        },
        showDialogAction(){
            // Ember.$.get('paper-menu')
            this.toggleProperty('showDialog');
        },
        openSomething(){

        },
        closeDialog(){
            this.toggleProperty('showDialog');
        },
        closePromptDialog(){
            this.toggleProperty('showPromptDialog');
        },
        cancel() {

        },
        ok1(x){
            
            let newDate = {
                dueDate:this.getProperties('dueDate'),
                taskId:x.id
            };
            console.log(x.getProperties('id'),"class", this.getProperties('dueDate'))
           
                // console.log(x._internalModel.id, "ab aayega id?")
        
            
            // console.log(x.getProperties('id'),"model tasks ka id")
            this.store.findRecord('task', x.id).then(data => {
                console.log(newDate.dueDate,"duedate hai ye")
                data.set('dueDate', this.getProperties('dueDate').dueDate)
                data.save();
            })
           
        },
    ok(){
        // console.log(this.getProperties('taskName'));
        if(!(this.getProperties('taskName')).taskName){
            alert('Enter');
            return; 
        }
       let newdata = {
            taskName: this.getProperties('taskName'),
            projectId: this.get('projectId').id
            // assignTo: [{teamName:this.get('teamName')}]
        };
        // console.log(this.get('projectId').id,"hghghg");
        // console.log(newdata.taskName.taskName)
        //console.log(JSON.stringify(newdata));
           let createTask = {
            taskName : newdata.taskName.taskName,
            projectId: this.get('projectId').id
        }
           this.store.createRecord('task',createTask).save()
           
        //    console.log(createTask, "this is the guy we need to catch hold offf..!!!")
           this.get('model').tasks.pushObject(createTask)
        //    console.log(this.get('model').getProperties('tasks'), "Ssdfsdfsafsdf")
        },
    
    markComplete(x){
        this.store.findRecord('task', x.id).then(data => {
            data.set('status','complete');
            console.log(x.id,"id kyun aa raha hai?")
            console.log(data,"task status is complete???????")
            data.save()
            
        })
    },
    deleteTask(x){
        this.store.findRecord('task', x.id).then(data => {
            data.deleteRecord();
            data.save();
        })
    }
}

});
