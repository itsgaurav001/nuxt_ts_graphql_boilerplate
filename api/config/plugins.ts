export default ({ env }) => {
  return {
    upload: env('NODE_ENV') != 'production' ? {} : {
      config: {
        upload: {
          provider: 'aws-s3',
          providerOptions: {
            endpoint: `${env('DO_SPACES_REGION')}.digitaloceanspaces.com`,
            accessKeyId: env('DO_SPACES_KEY'),
            secretAccessKey: env('DO_SPACES_SECRET'),
            params: {
              Bucket: env('DO_SPACES_BUCKET'),
            },
          },
        }
      }
    },
  }
};