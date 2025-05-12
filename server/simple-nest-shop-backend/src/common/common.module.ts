import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './error.filter';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonModule.forRoot({
      level: 'debug',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    }),
  ],
  providers: [
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
  exports: [PrismaService],
})
export class CommonModule {}
