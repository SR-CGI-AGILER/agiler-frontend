import Route from '@ember/routing/route';

export default Route.extend({
   async model(){
    let data = {
        teams: []
    };
    // this.set('teamId', params.id)
    // console.log()
    await this.store.findAll('team').then((specificTeam) => {
        // console.log(specificTeamProject, "this is query my team record")
        // debugger
        specificTeam.toArray().map(function (eachTeam) {
            data.teams.push(eachTeam)

        })
    })
        // a.map(function(e){
        //     console.log("jddhjhjh")
        //     this.store.query('project',{assignTo:[{_id:e._id}]})
        // });

        
        return data;
    }
});