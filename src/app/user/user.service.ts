import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { CreateUserBody } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async create(user: CreateUserBody) {
    try {
      const createdUser = await this.userRepository.save(user);

      await this.mailerService.sendMail({
        to: 'to@email.com',
        from: 'from@email.com',
        subject: 'Registro de usuario',
        template: 'registredUser',
        context: { user },
      });
      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserInfos(request, userId: string) {
    const token = request.headers.authorization?.split(' ')[1];
    const decoded = token ? this.jwtService.verify(token) : null;

    if (decoded && `${decoded.userId}` !== userId)
      return 'token invalido para esse usuario';

    const userInfos = await this._getUserInfos(userId, token);

    return userInfos;
  }

  async getAllUsersNameEmail() {
    const users = await this.userRepository.find();

    const userNameAndEmail = users.map((user) => ({
      name: user.name,
      email: user.email,
    }));

    return userNameAndEmail;
  }

  private async _getUserInfos(userId: string, token?: string) {
    const user = await this.userRepository.findOne({
      where: { id: Number(userId) },
    });

    if (!user) return 'Usuario nao encontrado';

    const userBasicInfos = { name: user.name, email: user.email };

    const userInfos = !token
      ? userBasicInfos
      : { ...userBasicInfos, login: user.login, cpf: user.cpf };

    return userInfos;
  }
}
