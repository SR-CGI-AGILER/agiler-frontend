import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let a = this.store.findAll('team');
        // retun a
        console.log(a);
        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return a;
    }
});
