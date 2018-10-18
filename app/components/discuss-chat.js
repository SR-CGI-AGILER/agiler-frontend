// import Component from '@ember/component';
// import {
//   inject as service
// } from '@ember/service';

// export default Component.extend({
//   websockets: Ember.inject.service('socket-io'),
//   io: null,
//   var: "",

//   init() {
//     this._super();
//     let io = this.get('websockets').socketFor('http://localhost:3000/');
//     console.log(typeof(io));
//     this.set('io', io);
//     io.on('open', this.myOpenHandler, this);
//     io.on('error', this.myerrorHandler, this);
//     io.on('message', this.myMessageHandler, this);
//     io.on('close', (event) => {
//       console.log('closed');
//     }, this);
//     this.set('message', [])
//   },
//   message: '',
//   myerrorHandler(event) {
//     console.log("this is the error", event)
//   },
//   myOpenHandler(event) {
//     console.log('On open event has been called:' + event);
//   },
//   myMessageHandler(event) {
//     console.log('Message:' + event + this.get('message'));
//     // this.set('message',event);
//     this.get('message').pushObject(event);
//   },
//   actions: {
//     // joinButtonPressed() {

//     //   // 	Ember.$.ajax({
//     //   // url:
//     //   // })
//     // },
//     sendButtonPressed() {
//       // console.log(this.get('var'))
//       let message = this.get('var')
//       this.set('var', "");
//       this.get('io').send(message);
//     }
//   }
// //   module.exports = io 
// });
