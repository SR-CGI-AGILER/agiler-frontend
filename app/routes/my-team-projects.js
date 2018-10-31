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
        await this.store.findAll('user').then((specificMember) => {
      
            let user = specificMember.map(function (eachMember) {
              
              return eachMember.getProperties('name', 'email')
            });
            this.set('user', user)
        })
        
        return data
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
        controller.set('user', this.get('user'))

    }
  

});
