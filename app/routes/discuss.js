import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import {
    inject as service
  } from '@ember/service';


export default Route.extend(AuthenticatedRouteMixin,{
  param: null,
  session: service('session'),
  beforeModel(){
    let token = this.get('session').userToken;

    if(!token){
        this.transitionTo('index');
    }
    
},  
  async model(param) {


    let messages = [];
    this.set('param', param)
    let data = this.get('session').currentUser;
    await this.set('messages', this.store.query('message', {
      roomName: param.room
    }).then(data => {
      data.toArray().map(function (each) {
        messages.push(each)
      })
    }))

    await this.store.findAll('team').then((data1) => {

      let teams = data1.map(function (eachTeam) {

        return eachTeam.getProperties('id', 'teamMembers')
      });
      this.set('teams', teams)

    })
    return messages

  
  },
  

  async setupController(controller, model) {
    this._super(controller, model);

    controller.set('model', model)
    controller.set('param', this.get('param'))
    controller.set('teams', this.get('teams'))
  }
  
});
