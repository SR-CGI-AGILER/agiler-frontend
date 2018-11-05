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
            
            
            // Ember.$.get('paper-menu')
            this.toggleProperty('showDialog');
    
        },
        showDialogAction1(task) {
            this.set('taskId', task.get('id'))
            this.toggleProperty('showDialog1');
        },
        openSomething(){

        },
        closeDialog(){
            this.toggleProperty('showDialog');
        },
        closeDialog1(){
            this.toggleProperty('showDialog1');
        },
        ok3(){

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
    ok2(){
        // console.log(this.get('teamId'), "its inside")
        
    //    let newdata = {
    //         projectName: this.getProperties('projectName'),
    //         assignTo: [{teamName:this.get('teamName')}]
    //     };
        
        // console.log(query.assignTo);
        //console.log(JSON.stringify(newdata));
        // console.log(this.get('teamId'), "I think the team id should get printed here")
        // let updateProject = {
        // projectName : newdata.projectName.projectName,
        // assignTo: [{teamId:this.get('teamId')}]
        // }
        // // console.log(this.get('teamId'),"hghghg")
        // this.store.createRecord('project', createProject).save().then(data => {
        //     // console.log("is this guy returning a promise ???")
        //     this.get('model').projects.pushObject(data)
        // })
            // console.log("is this returing a promise ???")
            // this.get('model').projects.pushObject(data)
    
        //    console.log(createProject, "this is the guy we need to catch hold offf..!!!")
    },
    
    markComplete(x){
        this.store.findRecord('task', x.id).then(data => {
            data.set('status','complete');
            console.log(x.id,"id kyun aa raha hai?")
            console.log(data,"task status is complete???????")
            data.save()
            
        })
    },
    showPromptDialogAction1(){
        this.toggleProperty('showPromptDialog1');
    },
    closePromptDialog1(){
        this.toggleProperty('showPromptDialog1')
    },
    addTeamToProject(team){
        let newdata = {
        teamId: team.id,
        teamName: team.teamName
        };
        console.log(newdata, "newdata")
        console.log(this.get('projectId').id,"adfg")
        // console.log(this.get('assignTo'), "asd")
        this.store.findRecord('project',this.get('projectId').id).then(data => {
         data.set('assignTo', newdata)
         console.log(data,"data hai ye")
            data.save();
        })
    },
    deleteTask(x){
        console.log("does it come here?")
        this.store.findRecord('task', x.id).then(data => {
            data.deleteRecord();
            data.save();
            this.get('model').tasks.removeObject(data);
        })
    }
}

});
