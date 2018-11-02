import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    // store: Ember.inject.service(),
    members: [],

    projectDetails: [],
    actions: {
        transitionToProjectView(project){
            // debugger
            // console.log(project.get('id'))
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
        addCountry(){},

    
        searchCountries(){
            console.log('this is getting is triggered')
        // console.log(this.get('teams'), "Iam inside the discuss controller")
        this.set('members', [])
        this.get('user').map(eachMember => {
    console.log(eachMember)
      this.get('members').push(eachMember)
  })

        return this.get('users')
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
                this.get('model').projects.removeObject(data);
                
            })
        }
    }






});
