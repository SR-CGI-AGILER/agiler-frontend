'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'agiler-frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    serverhost:"",
    torii: {},
    collaborationServerHost: "",
    activityServerHost: ""
    
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.serverhost = "localhost:4000";
    ENV.torii  = {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
            apiKey: '1053797418071-cb49noe362osfv37v0jc25bkvqbum5qp.apps.googleusercontent.com',
            redirectUri: 'http://localhost:4200/torii/redirect.html',
            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
          }
      }
    }
    ENV.collaborationServerHost = "localhost:3000";
    ENV.activityServerHost = "localhost:8000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.activityServerHost="agiler.blr.stackroute.in/activity-service"
    // here you can enable a production-specific feature
    ENV.serverhost = "agiler.blr.stackroute.in/auth-service";
    ENV.torii  = {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
            apiKey: '1053797418071-cb49noe362osfv37v0jc25bkvqbum5qp.apps.googleusercontent.com',
            redirectUri: 'http://agiler.blr.stackroute.in/torii/redirect.html',
            scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
          }
      }
    }
    ENV.collaborationServerHost = "agiler.blr.stackroute.in/collabration-service";
    ENV.activityServerHost = "agiler.blr.stackroute.in/activity-service"

  } 
    

  

  return ENV;
};
