import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import Ember from 'ember';
const  { RSVP, $ ,inject: {service} } = Ember


export default ToriiAuthenticator.extend({
    torii: service('torii'),
    session: service('session'),
    authenticate(provider, options){
          
        return this.get('torii').open(provider, options)
        .then((authData) => {
            // console.log(authData, "this is the torii autheticator")
             
            return new RSVP.Promise((resolve, reject) =>  {
                     
                return $.ajax('http://localhost:4000/auth/google', {
                    type: 'POST',
                    data: {
                        code: authData.authorizationCode,
                        redirect_uri: authData.redirectUri
                    },
                    success: resolve,
                    error: reject
                })
            })
        })
    }
})
