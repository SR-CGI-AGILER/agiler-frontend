import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToMyTeamProjects(team){
            console.log(team._internalModel.id,"teams")
            let temp  = team._internalModel.id 
            console.log(temp,"whta is this?");

            this.store.query('project', { assignTo: temp})
            // this.transitionToRoute('my-team-projects', team.get('id') , {queryParams: {  modelName: team.constructor.modelName}});

            
        },
            
            showPromptDialogAction(){
                this.toggleProperty('showPromptDialog');
            },
            closePromptDialog(){
                // console.log(this.getProperties('teamName'));
                this.toggleProperty('showPromptDialog');
            },
            cancel() {

            },
            ok(){}
        }
});
