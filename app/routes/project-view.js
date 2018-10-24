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
