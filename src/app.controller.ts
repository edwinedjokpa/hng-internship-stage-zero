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
    let ipAddress =
      request.headers['x-real-ip'] ||
      request.headers['x-forwarded-for'] ||
      request.ip;

    if (Array.isArray(ipAddress)) {
      ipAddress = ipAddress[0];
    }

    console.log(ipAddress);

    return this.appService.getLocation(name, ipAddress);
  }
}
