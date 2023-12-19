export default ({ env }) => {
  return {
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '123'),
        ssl: env.bool('DATABASE_SSL', false)
      }
    }
  }
}

