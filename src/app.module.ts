import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './app/entity/user.entity';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobModule } from './app/job/job.Module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'super123@',
      database: 'users',
      entities: [User],
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'e30667a6c5696d',
          pass: '978eca12b7decd',
        },
      },
      template: {
        dir: join(process.cwd(), 'src/mails'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    JobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
