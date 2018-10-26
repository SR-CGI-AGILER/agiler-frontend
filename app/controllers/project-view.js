import Controller from '@ember/controller';

import Ember from 'ember'
export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    store: Ember.inject.service(),

    projectDetails: [],
    // deleteTask(x){
    //     this.store.findRecord('task', x.id).then(data => {
    //         data.set('archiveTask',true)
    //         data.save();
    //     })
    // }
    actions: {
    showPromptDialogAction(){
        this.toggleProperty('showPromptDialog');
    },
    closePromptDialog(){
        // console.log(this.getProperties('teamName'));
        this.toggleProperty('showPromptDialog');
    },
    cancel() {

    },
    ok(){
        // console.log(this.getProperties('taskName'));
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
        }
    }


});
