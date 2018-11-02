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
        showDialogAction(task){
            this.set('taskId', task.get('id'))
            console.log('task', task.get('id'))
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
                taskId:this.get('taskId')
            };
            this.store.findRecord('task', this.get('taskId')).then(data => {
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
            // assignTo: [{teamName:this.get('teamName')}]
        };
        console.log(this.get('projectId').id,"hghghg");
        // console.log(newdata.taskName.taskName)
        //console.log(JSON.stringify(newdata));
           let createTask = {
            taskName : newdata.taskName.taskName,
            projectId: this.get('projectId').id
        }
           this.store.createRecord('task',createTask).save().then(data => {
            //    console.log("is this returing a promise ???")
            this.get('model').tasks.pushObject(data)

           })
           
        //    console.log(createTask, "this is the guy we need to catch hold offf..!!!")
           
        //    console.log(this.get('model').getProperties('tasks'), "Ssdfsdfsafsdf")
        this.toggleProperty('showPromptDialog');    
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
            this.get('model').tasks.removeObject(data);

        })
    }
}

});
