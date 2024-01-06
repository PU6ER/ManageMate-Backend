import { GetUserDto, UserDto } from './user.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Search,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/auth/constants';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('/users/:id')
  @Public()
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.updateUser(dto, +id);
  }

  @Get('/users/:id')
  @Public()
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Search('/users')
  @Public()
  @UsePipes(new ValidationPipe())
  async getUser(@Body() dto: GetUserDto) {
    return this.userService.getUser(dto);
  }
}
