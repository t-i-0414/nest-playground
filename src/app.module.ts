import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import { AllExceptionsFilter } from './common/exception/all-exceptions.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
