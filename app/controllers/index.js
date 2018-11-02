import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
    session: service('session'),
    actions:{
        authenticateSession(){
            
            let session = this.get('session');
            
            this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(()=>{
                
                let token = this.get('session').session.content.authenticated.jwtToken;
                
                this.get('session').set('userToken',token);
                
                let data = this.get('session').session.content.authenticated.userdata;
                console.log(data,"bsbs");
                this.get('session').set('currentUser',data);
                
                document.cookie = `jwtToken=${token}`;
                // console.log(document.cookie,"ember cookie");

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