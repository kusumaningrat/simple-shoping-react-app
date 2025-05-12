import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class ErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      const response: any = host.switchToHttp().getResponse();
  
      if (exception instanceof HttpException) {
        response.status(exception.getStatus()).json({
          errors: exception.getResponse(),
        });
      } else {
        response.status(500).json({
          errors: exception.message,
        });
      }
    }
  }
  