import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    store: Ember.inject.service(),

    projectDetails: [],
    actions: {
        transitionToProjectView(project){
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
    
     
    showPromptDialogAction(){
        this.toggleProperty('showPromptDialog');
    },
    closePromptDialog(){

        this.toggleProperty('showPromptDialog');
    },
    cancel() {

    },
    ok(){
        
       let newdata = {
            projectName: this.getProperties('projectName'),
            assignTo: [{teamName:this.get('teamName')}]
        };
        
        // console.log(query.assignTo);
        //console.log(JSON.stringify(newdata));
        // console.log(this.get('teamId'), "I think the team id should get printed here")
        let createProject = {
        projectName : newdata.projectName.projectName,
        assignTo: [{teamId:this.get('teamId')}]
        }
           this.store.createRecord('project',createProject).save()
           
           console.log(createProject, "this is the guy we need to catch hold offf..!!!")
           this.get('model').projects.pushObject(createProject)
        //    console.log(this.get('model').getProperties('tasks'), "Ssdfsdfsafsdf")
    },
        deleteProject(project){
                
            this.store.findRecord('project', project.id, {reload:true}).then(data => {
                data.deleteRecord();
                data.save();
            })
        }
    }






});
