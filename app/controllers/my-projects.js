import Controller from '@ember/controller';
export default Controller.extend({
    data: null,
    
    actions: {
        transitionToProjectView(project){
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
            
            // showPromptDialogAction(){
            //     this.toggleProperty('showPromptDialog');
            // },
            // closePromptDialog(){
            
            //     this.toggleProperty('showPromptDialog');
            // },
            // cancel() {

            // },
            // ok(){
                
            //    let newdata = {
            //         projectName: this.getProperties('projectName'),
            //         assignTo: [{teamName:this.get('teamName')}]
            //     };
            //         return new Promise((resolve) => {
            //             Em.$.ajax({
            //                 async: true,
            //                 crossDomain: true,
            //                 type: 'POST',
            //                 contentType: 'application/json',
            //                 data: JSON.stringify(newdata),
            //                 url:`http://localhost:8000/api/v1/project/:teamId`,
            //                 success: {
            //                     200: ()=>{
            //                         Em.run(null, resolve);
            //                     }
            //                 }
            //             })
            //         })
            //     },
                deleteProject(project){
                
                    this.store.findRecord('project', project.id, {reload:true}).then(data => {
                        data.deleteRecord();
                        data.save();
                    })
                }
            }

   

        

});
