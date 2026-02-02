import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  index() {
    return { message: 'This is admin page' };
  }
}
