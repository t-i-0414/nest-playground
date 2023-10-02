import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';
import { AllExceptionsFilter } from './common/exception/all-exceptions.filter';
import { ValidationPipe } from './common/pipe/validation.pipe';

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
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
