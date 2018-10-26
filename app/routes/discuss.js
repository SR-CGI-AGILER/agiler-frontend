import Route from '@ember/routing/route';


import {
  inject as service
} from '@ember/service';

export default Route.extend({
  // teams: null,
  param: null,
  session: service('session'),
  async model(param) {
    this.set('param', param)
    await this.store.findAll('team').then((data1) => {
      // console.log(team)
      let teams = data1.map(function (eachTeam) {

        return eachTeam.getProperties('id', 'teamMembers')
      });
      this.set('teams', teams)
      // console.log(this.get('teams'))
    })
    // console.log(param.room)
    let data = this.get('session').currentUser;
    // console.log(data, "In route");

    // console.log(this.get('teams'), "here in set teams")

    let data2 = {
      messages: this.store.query('message', {
        roomName: param.room
      }),
      // messages: this.store.findAll('message'),
      // users: this.store.findAll('user')
    }
    // console.log(data2, "this is the return in the model")
    return data2
  },
  
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('param', this.get('param'))
    
    controller.set('teams', this.get('teams'))

  }
});
