import Controller from '@ember/controller';
import ENV from 'agiler-frontend/config/environment';

import { inject as service } from '@ember/service';
// let x = document.cookie

export default Controller.extend({
    // x : document.cookie
    //validSession: document.cookie
    actions: {
        ok() {
            //  console.log(this.getProperties('teamName'));
            // debugger
            let newdata = {
                teamName: this.getProperties('teamName')
                //  assignTo: [{teamName:this.get('teamName')}]
            };
            let createTeam = {
                teamName: newdata.teamName.teamName,
            }
            this.store.createRecord('team', createTeam).save()

        }
    }
});
