import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggingMiddleware.name);

  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;
      this.logger.log(
        `[${method}] ${originalUrl} : ${statusCode} - ${responseTime}ms`,
      );
    });

    next();
  }
}
