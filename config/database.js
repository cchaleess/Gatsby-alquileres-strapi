module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '/db/alquileres'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
