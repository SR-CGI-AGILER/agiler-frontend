import Route from '@ember/routing/route';

export default Route.extend({
    teamId: null,
   

     async model(params) {
    
        let data = {
            projects: []
        };

        this.set('teamId', params.id)
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
        controller.set('teamName', this.get('teamName'))
        controller.set('user', this.get('user'))

    }
  

});

