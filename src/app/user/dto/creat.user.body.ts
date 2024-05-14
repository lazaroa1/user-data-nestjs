import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { CpfIsUnique, LoginIsUnique } from '../validators';
import { EmailIsUnique } from '../validators/validators.email';

export class CreateUserBody {
  @IsNotEmpty()
  @IsEmail()
  // @Validate(EmailIsUnique)
  email: string;
  @IsNotEmpty()
  // @Validate(LoginIsUnique)
  login: string;
  @IsNotEmpty()
  // @Validate(CpfIsUnique)
  cpf: number;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  name: string;
  confirmededEmail: boolean;
}
