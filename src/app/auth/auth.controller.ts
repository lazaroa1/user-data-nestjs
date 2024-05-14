import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginProps } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // VERIFICAR SE A ROTA REALMENTE E ACESSADA POR UM USUARIO AUTENTICADO
  // @UseGuards(AuthGuard)
  // Coloque na rota que queira que ela so seja acessada por um token valido
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async create(@Body() body: LoginProps) {
    return this.authService.login(body);
  }
}
