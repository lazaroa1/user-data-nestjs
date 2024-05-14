import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { LoginProps } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(auth: LoginProps): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({
      where: { login: auth.login },
    });
    if (!user || user.password !== auth.password) {
      throw new UnauthorizedException();
    }
    const payload = { login: user.login, userId: user.id };
    const jwtToken = await this.jwtService.signAsync(payload);
    return { access_token: jwtToken };
  }
}
