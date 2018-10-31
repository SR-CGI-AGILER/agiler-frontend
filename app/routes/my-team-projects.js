import Route from '@ember/routing/route';

export default Route.extend({
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
        return data
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }


});

