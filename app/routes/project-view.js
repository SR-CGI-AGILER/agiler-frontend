import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        if(!document.cookie){
            this.transitionTo('index');
        }
        
    },  
    model(params){
       
        let data = {
            project: this.store.peekRecord('project', params.id),
            // tasks: this.store.findAll('task', {id: params.id})
            tasks: this.store.query('task', {projectId: params.id})
        };
        return data
    },

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('projectId', this.paramsFor(this.routeName))
        // controller.set('projectDetails', this.store.peekRecord('project', this.paramsFor(this.routeName).id))
    
    }
});
