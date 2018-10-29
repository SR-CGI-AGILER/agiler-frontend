import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// console.log(document.cookie,"teamName");

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        let token = this.get('session').userToken;
        console.log(token,"safdSf");
        if(!token){
            this.transitionTo('index');
        }
        
    }               
});
