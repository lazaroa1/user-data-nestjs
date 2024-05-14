import { EmailIsUnique } from './validators/validators.email';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CpfIsUnique, LoginIsUnique } from './validators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  providers: [UserService, EmailIsUnique, CpfIsUnique, LoginIsUnique],
  imports: [TypeOrmModule.forFeature([User]), CacheModule.register()],
  controllers: [UserController],
})
export class UserModule {}
