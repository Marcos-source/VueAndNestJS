import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Post('sayHello')
  sayHello(@Body() message): Promise<any> {
    return this.appService.sayHello(message);
  }

  @Get('readChannel')
  readChanel(@Body() channel): Promise<any> {
    return this.appService.readChanel(channel);
  }

  @Post('sendScheduleMessage')
  sendScheduleMessage(@Body() message): Promise<any> {
    return this.appService.sendScheduleMessage(message);
  }
}
