import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(): { message: string } {
    return { message: 'Hello World!' };
  }
}
