import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
       
        let data = {
            project: this.store.findRecord('project', params.id),
            tasks: this.store.findAll('task', {id: params.id})
        }
        console.log(data)
        return data
    },

    setupController(controller, model) {
        console.log(this.paramsFor(this.routeName))
        this._super(...arguments);
        controller.set('projectId', this.paramsFor(this.routeName))
        // controller.set('projectDetails', this.store.peekRecord('project', this.paramsFor(this.routeName).id))
    
    }
});
