import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        console.log(params.id)
       return this.store.query('project', {teamId:params.id})
    }


});
