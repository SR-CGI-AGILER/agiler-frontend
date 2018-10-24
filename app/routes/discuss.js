import Route from '@ember/routing/route';

export default Route.extend({
    param: null,

    model(param) {
        this.set('param', param)
        console.log(param.room)
        return this.store.query('message', {roomName: param.room})
        
    },
    setupController(controller, model ){
        this._super(controller, model);
        controller.set('param', this.get('param'))
    }
});
