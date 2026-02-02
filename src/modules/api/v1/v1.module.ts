import { Module } from '@nestjs/common';
import { Lotto645Module } from './lotto645/lotto645.module';

@Module({
  imports: [Lotto645Module],
})
export class V1Module {}
