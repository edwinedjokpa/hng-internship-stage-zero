import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/hello')
  getClientIp(@Query('visitor_name') name: string, @Req() request: Request) {
    const ipAddress = request.ip;
    return this.appService.getLocation(name, ipAddress);
  }
}
