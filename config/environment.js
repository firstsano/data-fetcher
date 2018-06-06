'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'data-fetcher',
    environment,
    rootURL: '/',
    locationType: 'auto',
    i18n: {
      defaultLocale: 'ru',
    },
    moment: {
      defaultFormat: 'HH:mm DD.MM.YYYY',
      includeLocales: ['ru']
    },
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

    api: {
      juridicals: process.env.JURIDICALS_API,
      authorize: process.env.AUTHORIZE_API,
      physicals: process.env.PHYSICALS_API,
      physicalsAdditional: process.env.PHYSICALS_ADDITIONAL_API,
    },

    pagination: {
      pageAttributeName: 'page',
      pageSizeAttributeName: 'per-page',
      defaultPage: 1,
      defaultPerPage: 10,
    }
  };

  if (environment === 'development') {
    // development variables
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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
    // production variables
  }

  return ENV;
};
