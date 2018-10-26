import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
    beforeModel(){
        if(!document.cookie){
            this.transitionTo('index');
        }
        
    },  
    async  model(params) {

        // let tasks = []
       
        let data = {
            project: this.store.peekRecord('project', params.id),
            // tasks: this.store.findAll('task', {id: params.id})
            tasks: []
        };
        //  await this.store.peekRecord('project', params.id).then((data) => {
        //     console.log(data, "this is peek Record")
        //  })
        // console.log((this.store.peekRecord('project', params.id).toArray()), "sdfsdfsdfsdf")
         await this.store.query('task', { projectId: params.id }).then((specificProjectTasks) => {
                // console.log(specificProjectTasks,  "this is query record")
                specificProjectTasks.toArray().map(function(eachTask) {
                    data.tasks.push(eachTask)
                 })
         })


        // console.log(params.id, "hbbadcbhdc")
        // console.log(data, "hi")
        // console.log(data, "data it is")
        // data.toArray().map(function(each) {
        //     tasks.push(each)
        // })

        return data
    },

    setupController(controller, model) {
        this._super(...arguments);
        controller.set('projectId', this.paramsFor(this.routeName))
        // controller.set('model', this.get('model'))
        // controller.set('projectDetails', this.store.peekRecord('project', this.paramsFor(this.routeName).id))

    }
});
