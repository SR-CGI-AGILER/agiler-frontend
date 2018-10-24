import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    
    // return RSVP.hash({
    //   messages: this.store.findAll('message'),
    // //   users: this.store.findAll('users')
    // })
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
});
