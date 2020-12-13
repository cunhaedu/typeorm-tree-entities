import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      entities:
        process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
          ? defaultOptions.entities
          : ['./dist/entities/*.js'],
      migrations:
        process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
          ? defaultOptions.migrations
          : ['./dist/entities/*.js'],
      database:
        process.env.NODE_ENV === 'test'
          ? process.env.POSTGRES_DATABASE_TEST
          : process.env.POSTGRES_DATABASE,
    }),
  );
};
