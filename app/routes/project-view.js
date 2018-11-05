import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        let token = this.get('session').userToken;
        if(!token){
            this.transitionTo('index');
        }
        
    },  
    async  model(params) {

        let data = {
            project: this.store.peekRecord('project', params.id),
            // tasks: this.store.findAll('task', {id: params.id})
            tasks: [],
            teams: [],
            users:[]
        };
        //  await this.store.peekRecord('project', params.id).then((data) => {
        //     console.log(data, "this is peek Record")
        //  })
        // console.log((this.store.peekRecord('project', params.id).toArray()), "sdfsdfsdfsdf")
        await this.store.findAll('team').then((specificTeam)=> {
            specificTeam.toArray().map(function (eachTeam) {
                data.teams.push(eachTeam)
            })
        })
         await this.store.query('task', { projectId: params.id }).then((specificProjectTasks) => {
             
        
                specificProjectTasks.toArray().map(function(eachTask) {
                    data.tasks.push(eachTask)
                 })
         })
         await this.store.findAll('user').then((specificMember) => {
      
            let user = specificMember.map(function (eachMember) {
              
              return eachMember.getProperties('name', 'email')
            });
            this.set('user', user)
        })
        // data.toArray().map(function(each) {
        //     tasks.push(each)
        // })   controller.set('user', this.get('user'))

        return data
    },

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('projectId', this.paramsFor(this.routeName))
        controller.set('user', this.get('user'))
        // controller.set('model', this.get('model'))
        // controller.set('projectDetails', this.store.peekRecord('project', this.paramsFor(this.routeName).id))

    }
});
