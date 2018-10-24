import Controller from '@ember/controller';

export default Controller.extend({
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
        console.log(this.get('teams'), "Iam inside the discuss controller")
        this.set('members', [])
        this.get('teams').map( eachTeam => {
            console.log(eachTeam)
            eachTeam.teamMembers.map(eachMember => {

                this.get('members').push(eachMember)
            })
        })
        console.log(this.get('members'), "I should be the memners array")
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
