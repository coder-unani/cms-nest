import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './app/admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './app/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? [`.env.${process.env.NODE_ENV}`, '.env']
        : ['.env'],
    }),
    AdminModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
