import GA from './google';

export default GA.extend({
    namespace: 'oauth2/v2',
    // session:
    pathForType() {
         debugger
        return 'userinfo'
    }
});