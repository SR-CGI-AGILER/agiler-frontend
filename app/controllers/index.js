import Controller from '@ember/controller';
// import Ember from 'ember';
import { inject as service } from '@ember/service';
// import config from '../../config/environment';
export default Controller.extend({
    session: service('session'),
    // config: config.torii.providers['github-oauth2'],
    actions:{
        authenticateSession(){
            
            let session = this.get('session');
            //cgeonsole.log ( session.get("data"), "asdklasdlkdkjlsdflkjjsfjkdh")
            this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(()=>{
                // debugger
                // session.
                // console.log(this.get('session').access_token);
                let token = this.get('session').session.content.authenticated.responseObj.jwtToken;
                console.log(this.get('session').session.content.authenticated);
                // document.cookie = `jwtToken=${token}`;
                // console.log(document.cookie,"Ember Cookie");
                if(token){
                    this.transitionToRoute('create-team.team-name');
                }
            }).catch(err=>{
                console.log(err);
            });
        },
        authenticateGithub(){
            let session = this.get('session');
            this.get('session').authenticate('authenticator:torii', 'github-oauth2').then(()=>{
                this.store.queryRecord('user', {}).then((user)=>{
                    this.get('session').set('currentUser',user);
                })
            }).catch(err=>{
                console.log(err);
            })
        }
    }
});