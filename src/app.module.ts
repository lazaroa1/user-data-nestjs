import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './app/entity/user.entity';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobModule } from './app/job/job.Module';

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
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    JobModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
