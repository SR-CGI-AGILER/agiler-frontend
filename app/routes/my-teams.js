import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('index');
        }
    },
   async model(){
    let data = {
        teams: []
    };
    await this.store.findAll('team').then((specificTeam) => {
    
        specificTeam.toArray().map(function (eachTeam) {
            data.teams.push(eachTeam)

        })
    })        
        return data;
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }
});
