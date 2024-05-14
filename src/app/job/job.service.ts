import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);

  @Cron('*/30 * * * * *')
  handleCron() {
    this.logger.debug('Executando tarefa a cada 30 segundos');
    console.log('Executando tarefa a cada 30 segundos');
  }
}
