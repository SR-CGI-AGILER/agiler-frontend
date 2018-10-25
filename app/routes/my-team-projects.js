import Route from '@ember/routing/route';

export default Route.extend({
    teamId: null,
    model(params){
        this.set('teamId', params.id)
        console.log(params.id, "hbbadcbhdc")
       return this.store.query('project', {assignTo:{teamId:params.id}})
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }
});
