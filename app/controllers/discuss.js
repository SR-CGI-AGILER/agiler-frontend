import Controller from '@ember/controller';

export default Controller.extend({
//   users: [{
//     "id": "b7af8b6a-a910-4317-9297-7b4fd076fede",
//     "name": "Swarnim Das",
//     "email": "swarnimdas97@gmail.com",
//     "profilePicUrl": "https://lh4.googleusercontent.com/-cbOM-BWVHIM/AAAAAAAAAAI/AAAAAAAAABo/FzB8lttOl68/photo.jpg"
// }, {
//     "id": "deddd8d2-e041-4fbb-a8ed-3c079af9930d",
//     "name": "Priyanka Dutta",
//     "email": "priyankadutta67@gmail.com",
//     "profilePicUrl": "https://lh6.googleusercontent.com/-66jqKsALbcc/AAAAAAAAAAI/AAAAAAAAPM8/Cc3W2cBZCIQ/photo.jpg"
// }, {
//     "id": "eb74eb40-71b1-49df-ad7a-760110f14efb",
//     "name": "priyanka dutta",
//     "email": null,
//     "profilePicUrl": "https://avatars1.githubusercontent.com/u/42642370?v=4"
// }],
    actions: {
    sendButtonPressed(name) {
      this.store.createRecord('message', {
        roomname: "raaptor",
        messages: this.get('var'),
        createdBy: "Atreya",
        createdAt: name

      }).save();
      this.set('var', "");
    },

    addUsers() {
        this.toggleProperty('showDialog');
        // this.set('showuser', this.store.findAll('users'));
        // console.log(this.get('showuser'))
    },

    closeDialog() {
        this.toggleProperty('showDialog')
    },

    search_user(user) {
        console.log(user)

    }
  }
});
