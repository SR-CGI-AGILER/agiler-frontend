import Route from '@ember/routing/route';
// import {inject as service } from '@ember/service';
export default Route.extend({
    // session: service('session'),
    model(){
        let a = this.store.findAll('project');
        // retun a
    //    let userData = this.get('session').session.content.authenticated.userData;
    //     console.log(userData,"aaaaaa");
        // let a = this.store.query('project',)
       
        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return a;
    }
   
});
