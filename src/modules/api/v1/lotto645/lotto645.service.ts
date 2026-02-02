import { Injectable } from '@nestjs/common';

@Injectable()
export class Lotto645Service {
  index(): { message: string } {
    return { message: 'Hello World' };
  }
}