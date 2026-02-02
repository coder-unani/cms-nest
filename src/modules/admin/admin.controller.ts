import { Controller, Get, Render } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @Render('admin/index')
  index() {
    const { message } = this.adminService.index();
    return { layout: 'admin/main', title: 'Admin', message };
  }
}
