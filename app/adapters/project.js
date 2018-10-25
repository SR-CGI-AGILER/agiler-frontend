import DS from 'ember-data';

import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({

    session: service('session'),

	buildURL(modelName, id, snapshot, requestType, query){
        let memberId = this.get('session').session.content.authenticated.userdata.id;
        console.log(memberId,"aaaadsdnj")
        return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
    }
})
