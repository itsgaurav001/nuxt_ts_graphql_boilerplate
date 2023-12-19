module.exports = ({ env }) => {

  return  [
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              `${env('DO_SPACES_BUCKET')}.${env('DO_SPACES_REGION')}.digitaloceanspaces.com`,
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              `${env('DO_SPACES_BUCKET')}.${env('DO_SPACES_REGION')}.digitaloceanspaces.com`,
            ],
            // upgradeInsecureRequests: null,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];

}