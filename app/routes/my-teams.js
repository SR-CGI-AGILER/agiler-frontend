import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let a = this.store.findAll('team');
        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return a;
    }
});
