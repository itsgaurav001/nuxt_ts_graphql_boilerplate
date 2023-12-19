export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '123'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '123'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '123'),
    },
  },
});
