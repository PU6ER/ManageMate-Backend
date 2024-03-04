import {  UserDto } from './user.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Search,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'


@Controller('user/profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Auth()
  async profile(@CurrentUser('id') id:string){
    return this.userService.getProfile(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto){
    return this.userService.update(id,dto)
  }

  // @Patch('/users/:id')
  // @Public()
  // @UsePipes(new ValidationPipe())
  // async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
  //   return this.userService.updateUser(dto, +id);
  // }

  // @Get('/users/:id')
  // @Public()
  // async getUserById(@Param('id') id: string) {
  //   return this.userService.getUserById(+id);
  // }

  // @Search('/users')
  // @Public()
  // @UsePipes(new ValidationPipe())
  // async getUser(@Body() dto: GetUserDto) {
  //   return this.userService.getUser(dto);
  // }
}
