import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        if(!document.cookie){
            this.transitionTo('index');
        }
        
    },  
    model(){
        let a = this.store.findAll('project')
        return a
    }
});
