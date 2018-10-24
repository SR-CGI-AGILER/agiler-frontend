import Route from '@ember/routing/route';

import {inject as service} from '@ember/service';

export default Route.extend({
    param: null,

    session:service('session'),
    
    model(param) {
        this.set('param', param)
        console.log(param.room)
        let data = this.get('session').currentUser;
        console.log(data, "In route");
        return this.store.query('message', {roomName: param.room})
        
        

    },
    setupController(controller, model ){
        this._super(controller, model);
        controller.set('param', this.get('param'))
    }
});
