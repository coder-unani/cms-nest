import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
});

type DbType =
  | 'mysql'
  | 'postgres'
  | 'sqlite'
  | 'mariadb'
  | 'mssql'
  | 'oracle'
  | 'mongodb';

export default registerAs('app', () => ({
  servicePort: process.env.SERVICE_PORT ? Number(process.env.SERVICE_PORT) : 3000,
  dbType: (process.env.DB_TYPE as DbType) ?? 'mysql',
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  dbUserName: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
}));