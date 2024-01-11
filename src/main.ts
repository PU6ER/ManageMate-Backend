import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:5173', 'https://manage-mate.vercel.app'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,SEARCH',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });
  app.setGlobalPrefix('api');
  await app.listen(5555);
}
bootstrap();
