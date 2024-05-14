import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { User as UserEntity } from '../../entity/user.entity';

@ValidatorConstraint({ name: 'CpfIsUnique', async: true })
@Injectable()
export class CpfIsUnique implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async validate(cpf: number): Promise<boolean> {
    const haveCpf = await this.userRepository.findOne({
      where: { cpf },
    });

    return !haveCpf;
  }

  defaultMessage(): string {
    return 'CPF already in use';
  }
}
