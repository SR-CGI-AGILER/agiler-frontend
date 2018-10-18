import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let a = this.store.findAll('project')
       console.log(a)
        return a
    }
});
