import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma = new PrismaClient();
  
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (e) {
    console.error('Database connection error', e);
    return
  }

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
