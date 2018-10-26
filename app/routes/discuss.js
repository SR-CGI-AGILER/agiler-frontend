import Route from '@ember/routing/route';

import {inject as service} from '@ember/service';

export default Route.extend({
    param: null,

    session:service('session'),
    
        async model(param) {
            let messages = [];
            this.set('param', param)
        
        let data = this.get('session').currentUser;
        
       await this.set('messages', this.store.query('message', {roomName: param.room}).then(data => {
            
                data.toArray().map(function(each) {
                        messages.push(each)
                })            
        }))
        return messages
    },
    
    async setupController(controller, model ){
        this._super(controller, model);
        
        controller.set('model', model)
        controller.set('param', this.get('param'))
    }
});
