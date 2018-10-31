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
    // this.set('teamId', params.id)
    // console.log()
    await this.store.findAll('team').then((specificTeam) => {
        // console.log(specificTeamProject, "this is query my team record")
        // debugger
        specificTeam.toArray().map(function (eachTeam) {
            data.teams.push(eachTeam)

        })
    })
   

        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return data;
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }
});
