import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService, ConfigType } from '@nestjs/config';
import envConfig from './env';

type AppEnv = ConfigType<typeof envConfig>;

export default (configService: ConfigService): TypeOrmModuleOptions => {
  const env = configService.get<AppEnv>('app');

  if (!env) {
    throw new Error("Missing config namespace 'app'. Did you load envConfig in ConfigModule.forRoot({ load: [...] })?");
  }

  return {
    type: env.dbType,
    host: env.dbHost,
    port: env.dbPort,
    username: env.dbUserName,
    password: env.dbPassword,
    database: env.dbName,
    autoLoadEntities: true,
    synchronize: false,
  };
};