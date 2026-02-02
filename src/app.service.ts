import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(): { message: string } {
    const nowDate = new Date();
    return { message: nowDate.toISOString() };
  }
}
