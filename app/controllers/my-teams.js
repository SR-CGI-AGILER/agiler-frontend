import Controller from '@ember/controller';
import ENV from 'agiler-frontend/config/environment';

import {inject as service} from '@ember/service';
export default Controller.extend({
    session: service('session'),

    actions: {
        transitionToMyTeamProjects(team){
 
            let temp  = team._internalModel.id 
           

            // this.store.query('project', { assignTo: temp})
            this.transitionToRoute('my-team-projects', temp , {queryParams: {  modelName: team.constructor.modelName}});

            
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
                //  console.log(this.getProperties('teamName'));
            let newdata = {
                 teamName: this.getProperties('teamName')
                //  assignTo: [{teamName:this.get('teamName')}]
             };
             let createTeam = {
                teamName : newdata.teamName.teamName,
                
                }
                   this.store.createRecord('team',createTeam).save()
                   
                   console.log(createTeam, "this is the guy we need to catch hold offf..!!!")
                   this.get('model').teams.pushObject(createTeam)

            
             },
             deleteTeam(team){
                this.store.findRecord('team', team.id, {reload:true}).then(data => {
                    data.deleteRecord();
                    data.save();
                })
            }
        }

        
});
