import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): Promise<any> {
    return this.appService.getUsers();
  }

  @Post('create')
  createUser(@Body() user): Promise<any> {
  return this.appService.createUser(user);
  }
}
