import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from './dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    return this.userService.create(body);
  }

  @Get('info/:userId')
  async getUserInfor(@Req() request, @Param('userId') userId: string) {
    return this.userService.getUserInfos(request, userId);
  }

  @UseInterceptors(CacheInterceptor)
  @Get('name-email')
  async getAllUsersNameEmail() {
    return this.userService.getAllUsersNameEmail();
  }
}
