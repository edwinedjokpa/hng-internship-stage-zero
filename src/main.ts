import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const APP_PORT = process.env.APP_PORT || 3000;
  app.enableCors();
  await app.listen(APP_PORT);
}
bootstrap();
