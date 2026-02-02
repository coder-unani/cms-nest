import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../config/database';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 설정 모듈 임포트
      inject: [ConfigService], // 설정 서비스 주입
      useFactory: (configService: ConfigService) =>
        databaseConfig(configService),
    }),
    V1Module,
  ],
})
export class ApiModule {}
