import { DataSource } from 'typeorm';
import envConfig from '../config/env';

const env = envConfig();

if (!env.dbHost) {
  throw new Error('DB_HOST is required');
}

if (!env.dbUserName) {
  throw new Error('DB_USERNAME is required');
}

if (!env.dbName) {
  throw new Error('DB_NAME is required');
}

const AppDataSource = new DataSource({
  type: 'mysql',
  host: env.dbHost,
  port: env.dbPort,
  username: env.dbUserName,
  password: env.dbPassword,
  database: env.dbName,
  entities: ['src/database/entities/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
});

export default AppDataSource;