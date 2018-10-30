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
            
            this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(()=>{
                
                let token = this.get('session').session.content.authenticated.responseObj.jwtToken;
                // console.log(this.get('session').session.content.authenticated.responseObj)
                
                this.get('session').set('userToken',token);
                
                let data = this.get('session').session.content.authenticated.userdata;
                this.get('session').set('currentUser',data);
                if(token){
                    this.transitionToRoute('my-teams');
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