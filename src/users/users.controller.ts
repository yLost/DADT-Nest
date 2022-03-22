import { PrismaService } from './../prisma/prisma.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

@Controller('')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users;
  }

  @Get('/user')
  async createUser(): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        name: 'John Doe',
        email: uuidv4() + '-test@gmail.com',
      },
    });

    return user;
  }
}
