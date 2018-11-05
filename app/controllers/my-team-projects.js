import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['modelName'],
    
    members: [],

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
        
        
       let newdata = {
            projectName: this.getProperties('projectName'),
            assignTo: [{teamName:this.get('teamName')}]
        };
        
        
        let createProject = {
        projectName : newdata.projectName.projectName,
        assignTo: [{teamId:this.get('teamId')}]
        }
    
        this.store.createRecord('project', createProject).save().then(data => {
          
            this.get('model').projects.pushObject(data)
        })
         

       
           
     
    },
        deleteProject(project){
                
            this.store.findRecord('project', project.id, {reload:true}).then(data => {
                data.deleteRecord();
                
                data.save();
                this.get('model').projects.removeObject(data);
                
            })
        }
    }






});
