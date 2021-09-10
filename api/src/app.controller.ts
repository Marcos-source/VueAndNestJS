import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('commands')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCommands(): Promise<any> {
    return this.appService.getCommands();
  }

  @Post('create')
  createCommand(@Body() command): Promise<any> {
    try {
      const response = this.appService.createCommand(command);
      return response
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }
}
