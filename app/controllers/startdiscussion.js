import Controller from '@ember/controller';
import {
	inject as service
  } from '@ember/service';

export default Controller.extend({
    session: service('session'),
    // queryParams: ['room'],
    actions: {
        goToDiscussion(name){
            // console.log(name, "form the start discuss control")
            let userid = this.get('session').session.content.authenticated.userdata.id;
            this.store.createRecord('room', { roomName:name,
                                                members: `${userid}` }).save()
            // this.transitionToRoute('discuss')
        },
        
        goToRoom(room){
            // console.log(room)

            this.transitionToRoute(`discuss`,room.roomName, {queryParams : { roomId: room.id }})
        }
    }
});
