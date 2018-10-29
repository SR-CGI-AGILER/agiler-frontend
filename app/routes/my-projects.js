import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('index');
        }
        
    },  
    model(){
        // debugger
        let a = this.store.findAll('project');
        
        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return a;
    }
   
});