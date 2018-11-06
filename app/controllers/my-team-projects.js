import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['modelName'],
    
    members: [],

    projectDetails: [],
    actions: {
        transitionToProjectView(project){
         
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },

    


        addUsers(){
        // console.log(this.get('users'), "Iam inside the discuss controller")
        this.set('members', [])
        this.get('user').map(eachMember => {
        console.log(eachMember)
        this.get('members').push(eachMember)
  })
        this.toggleProperty('showDialog');

        return this.get('users')
    },
        add(item){
            console.log(item.id,this.get('teamId'))
            let newData = {
                memberId:item,
                teamId:this.get('teamId')
            };
            this.store.findRecord('team', newData.teamId).then(data => {
                console.log(newData.memberId,"ids hai ye")
                data.set('teamMembers', newData.memberId) 
                // console.log(data.get('memberId'),"aaaaaaa")

                data.save();
            })
        },
        addVegeName(){    
        },
        removeVegeName(){},
        closeDialog() {
            this.toggleProperty('showDialog')
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
