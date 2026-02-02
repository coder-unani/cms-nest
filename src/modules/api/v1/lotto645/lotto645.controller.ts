import { Controller, Get } from '@nestjs/common';
import { Lotto645Service } from './lotto645.service';

@Controller('api/v1/lotto645')
export class Lotto645Controller {
  constructor(private readonly lotto645Service: Lotto645Service) {}

  @Get()
  index(): { message: string } {
    return this.lotto645Service.index();
  }
}
