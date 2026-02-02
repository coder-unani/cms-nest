import { Module } from '@nestjs/common';
import { Lotto645Controller } from './lotto645.controller';
import { Lotto645Service } from './lotto645.service';

@Module({
  controllers: [Lotto645Controller],
  providers: [Lotto645Service],
})
export class Lotto645Module {}
