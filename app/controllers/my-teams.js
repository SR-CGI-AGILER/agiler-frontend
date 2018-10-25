import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    session: service('session'),

    actions: {
        transitionToMyTeamProjects(team){
            // console.log(team._internalModel.id,"teams")
            let temp  = team._internalModel.id 
            // console.log(temp,"whta is this?");

            // this.store.query('project', { assignTo: temp})
            this.transitionToRoute('my-team-projects', temp , {queryParams: {  modelName: team.constructor.modelName}});

            
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
                 console.log(this.getProperties('teamName'));
            let newdata = {
                 teamName: this.getProperties('teamName')
                //  assignTo: [{teamName:this.get('teamName')}]
             };

             let memberId =this.get('session').session.content.authenticated.userdata.id;
            console.log(memberId,"hgfchgdasghsagh")
             console.log(newdata);
             //console.log(JSON.stringify(newdata));
                 return new Promise((resolve) => {
                     Em.$.ajax({
                         async: true,
                         crossDomain: true,
                         type: 'POST',
                         contentType: 'application/json',
                         data: JSON.stringify(newdata),
                         url:`http://localhost:8000/api/v1/team/${memberId}`,
                         success: {
                             200: ()=>{
                                 Em.run(null, resolve);
                             }
                         }
                     })
                 })
             }
         }

        
});
