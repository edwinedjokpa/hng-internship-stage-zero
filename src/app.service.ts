import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    const currentDateTime = new Date().toISOString();
    return {
      email: 'edjokpaedwin@gmail.com',
      current_datetime: currentDateTime,
      github_url: 'https://github.com/edwinedjokpa/hng-internship-stage-zero',
    };
  }
}
