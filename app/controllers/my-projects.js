import Controller from '@ember/controller';

export default Controller.extend({
    data: null,
    init(){
        console.log("adasjdhakjsdh")
        this.data = this.store.findAll('project')
        console.log(this.data)
    },
    actions: {
        transitionToProjectView(project){
            console.log(project.get("id"), "askldjlaksjdlkajslkdja");
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
        // actions : {
            findTeam(){
                // let data = this.serialize(snapshot);
        
                return new Promise((resolve) => {
                    Em.$.ajax({
                        async: true,
                        crossDomain: true,
                        type: 'GET',
                        contentType: 'application/json',
                        // data: JSON.stringify(data),
                        url: `http://172.23.238.243:4000/api/teams/team1`,
                        success: {
                            200: ()=>{
                                Em.run(null, resolve);
                                console.log(resolve)
                            }
                        }
                    })
                })
            }
        }

});
