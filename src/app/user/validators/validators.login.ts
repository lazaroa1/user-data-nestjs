import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User as UserEntity } from '../../entity/user.entity';

@ValidatorConstraint({ name: 'LoginIsUnique', async: true })
@Injectable()
export class LoginIsUnique implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async validate(login: string): Promise<boolean> {
    const haveLogin = await this.userRepository.findOne({
      where: { login },
    });

    return !haveLogin;
  }

  defaultMessage(): string {
    return 'Login already in use';
  }
}
