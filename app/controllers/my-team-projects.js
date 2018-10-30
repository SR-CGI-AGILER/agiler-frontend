import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    // store: Ember.inject.service(),

    projectDetails: [],
    actions: {
        transitionToProjectView(project){
            // debugger
            // console.log(project.get('id'))
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
    showDialogAction(){
        this.toggleProperty('showDialog');
    },
    closeDialogAction(){
        this.toggleProperty('showDialog');
    },
    ok1(){

    },
    addTeam(){
        
    },
    searchTeams(){

    },
    cancel1(){

    },
    ok(){
        // console.log(this.get('teamId'), "its inside")
        
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
        // console.log(this.get('teamId'),"hghghg")
        this.store.createRecord('project', createProject).save().then(data => {
            // console.log("is this guy returning a promise ???")
            this.get('model').projects.pushObject(data)
        })
            // console.log("is this returing a promise ???")
            // this.get('model').projects.pushObject(data)

       
           
        //    console.log(createProject, "this is the guy we need to catch hold offf..!!!")
    },
        deleteProject(project){
                
            this.store.findRecord('project', project.id, {reload:true}).then(data => {
                data.deleteRecord();
                data.save();
            })
        }
    }






});
