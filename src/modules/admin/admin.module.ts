import { Module } from '@nestjs/common';
import { ApiModule } from '../api/api.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [ApiModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
