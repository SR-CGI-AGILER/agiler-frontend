import Route from '@ember/routing/route';

export default Route.extend({
    teamId: null,

    async model(params) {
        // debugger
        let data = {
            // project: this.store.peekRecord('project', { assignTo: { teamId: params.id } }),
            projects: []
        };

        this.set('teamId', params.id)
        // console.log(params.id, "hbbadcbhdc")
        //    return this.store.query('project', {assignTo:{teamId:params.id}})
        await this.store.query('project', { assignTo: { teamId: params.id } }).then((specificTeamProject) => {
            // console.log(specificTeamProject, "this is query my team record")
            // debugger
            specificTeamProject.toArray().map(function (eachProject) {
                data.projects.push(eachProject)

            })
        })
        // console.log(data, "is this comming inthe model actually ??")
        return data
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('teamId', this.get('teamId'))
    }


});
