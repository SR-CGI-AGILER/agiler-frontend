import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let a = this.store.findAll('project')
        return a
    }
});
