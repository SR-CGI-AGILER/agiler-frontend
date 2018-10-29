import Controller from '@ember/controller';
import ENV from 'agiler-frontend/config/environment';

import {inject as service} from '@ember/service';
export default Controller.extend({
    session: service('session'),

    actions: {
        transitionToMyTeamProjects(team){
 
            let temp  = team; 
            // console.log(team, "hghg")
        //    debugger
            // this.get('model').peekRecord('')
            // this.store.query('project', { assignTo: temp})
            this.transitionToRoute('my-team-projects', temp.get('id') , { queryParams: {  modelName: team.constructor.modelName}});

            
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
                // debugger
            let newdata = {
                 teamName: this.getProperties('teamName')
                //  assignTo: [{teamName:this.get('teamName')}]
             };
             let createTeam = {
                teamName : newdata.teamName.teamName,
                assignTo: [{teamId:this.get('teamId')}]
                }
                   this.store.createRecord('team', createTeam).save().then(data => {
                    //    console.log("is this returing a promise ???")
                       this.get('model').teams.pushObject(data)

                   })
                   
                //    console.log(createTeam, "this is the guy we need to catch hold offf..!!!")
                //    this.get('model').teams.pushObject(createTeam)

            //  let memberId =this.get('session').session.content.authenticated.userdata.id;
            //      return new Promise((resolve) => {
            //          Em.$.ajax({
            //              async: true,
            //              crossDomain: true,
            //              type: 'POST',
            //              contentType: 'application/json',
            //              data: JSON.stringify(newdata),
            //              url:`http://${ENV.activityServerHost}/api/v1/team/${memberId}`,
            //              success: {
            //                  200: ()=>{
            //                      Em.run(null, resolve);
            //                  }
            //              }
            //          })
            //      })
             },
             deleteTeam(team){
                this.store.findRecord('team', team.id, {reload:true}).then(data => {
                    data.deleteRecord();
                    data.save();
                })
            }
        }

        
});
