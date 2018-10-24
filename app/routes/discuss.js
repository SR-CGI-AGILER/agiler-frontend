import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import team from '../serializers/team';

export default Route.extend({
  teams: null, 
  model() {
    
    // return RSVP.hash({
    //   messages: this.store.findAll('message'),
    // //   users: this.store.findAll('users')
    // })
    this.store.findAll('team').then((data) => {
       let teams = data.map(function(eachTeam) {
         return eachTeam.getProperties('id', 'teamMembers')
       })
      //  this.set('teams', teams)
       console.log(teams)
      //  teams.map(function(teamId) {
      //    this.store
      //  })
      this.set('teams', teams)
      console.log(this.get('teams'))
    })


    
    let data = {
      messages: this.store.findAll('message'),
      users: this.store.findAll('user')
    }
    return data
  },
  //   setupController(controller, model) {
  //       this._super(controller, model);
  //       this.controller.set('users', this.store.findAll('users'))
  //   }

  setupController(controller, model) {
    controller.set('teams', this.get('teams'))
  }
});
