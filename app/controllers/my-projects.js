import Controller from '@ember/controller';
export default Controller.extend({
    data: null,
    newCard: [],
    // init(){

    //     this.data = this.store.findAll('project')
    // },
    actions: {
        transitionToProjectView(project){
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
            
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
                // console.log(this.getProperties('teamName'));
            //    let newdata = {
            //         projectName: this.getProperties('projectName'),
            //         assignTo: [{teamName:this.get('teamName')}]
            //     };
            //     console.log(newdata);
            //     //console.log(JSON.stringify(newdata));
            //         return new Promise((resolve) => {
            //             Em.$.ajax({
            //                 async: true,
            //                 crossDomain: true,
            //                 type: 'POST',
            //                 contentType: 'application/json',
            //                 data: JSON.stringify(newdata),
            //                 url:`http://localhost:8000/api/v1/project`,
            //                 success: {
            //                     200: ()=>{
            //                         Em.run(null, resolve);
            //                     }
            //                 }
            //             })
            //         })
            //     }
            // }
   

                if (this.getProperties('name2').name2) {
                  let newProject = {
                      // id: Math.random(Math.floor(100000)),
                    projectName: this.getProperties('projectName').projectName,
                    teamName: this.getProperties('teamName').teamName
                  }
                  this.newCard.pushObject(newProject);
                  let createActivity = this.store.createRecord('project', {
                      // id: newProject.id,
                    projectName: newProject.projectName,
                    assignTo: newProject.teamName
                  })
                  createActivity.save();
                  console.log(createActivity)
                }
              }
            }
            

});
