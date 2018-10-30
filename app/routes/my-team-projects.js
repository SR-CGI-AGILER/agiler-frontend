import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    teamId: null,
    init() {
        // console.log('is this hook getting called ??')
    },  
    beforeModel(){
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('index');
        }
    },      

     async model(params) {
        // debugger
        let data = {
            projects: []
        };

        this.set('teamId', params.id)
        // console.log(params.id, "my projects of a perticular team")
       await this.store.query('project', { assignTo: { teamId: params.id } }).then((specificTeamProject) => {
            
            specificTeamProject.toArray().map(function (eachProject) {
                data.projects.push(eachProject)

            })
        })
        return data
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }


});
