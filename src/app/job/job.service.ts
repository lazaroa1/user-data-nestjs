import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);
  constructor(private mailerService: MailerService) {}

  @Cron('*/30 * * * * *')
  async handleCron() {
    this.logger.debug('Executando tarefa a cada 30 segundos');

    await this.mailerService.sendMail({
      to: 'to@email.com',
      from: 'from@email.com',
      subject: 'Job',
      template: 'job',
    });
  }
}
