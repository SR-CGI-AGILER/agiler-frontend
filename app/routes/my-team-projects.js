import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    teamId: null,
    init() {
        // console.log('is this hook getting called ??')
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

        await this.store.findAll('team').then((data1) => {
             return data1
    })
        return data
    },
    async setupController(controller, model) {
        this._super(controller, model);
    
        controller.set('model', model)
        controller.set('teams', this.get('teams'))
      }


});
