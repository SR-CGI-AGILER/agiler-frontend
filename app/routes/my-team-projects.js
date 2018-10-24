import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        console.log(params.id, "hbbadcbhdc")
       return this.store.query('project', {assignTo:{teamId:params.id}})
    }
});
