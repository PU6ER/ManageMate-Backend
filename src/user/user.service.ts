import { GetUserDto, UserDto } from './user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(dto: GetUserDto) {
    const user = this.prisma.user.findFirst({
      where: { email: dto.email, password: dto.password },
    });
    return user;
  }
  async findOne(email: string) {
    return this.prisma.user.findFirst({ where: { email: email } });
  }
  async getUserById(id: number) {
    const user = this.prisma.user.findUnique({
      where: { id: id },
    });
    return user;
  }
  async updateUser(user: UserDto, id: number) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        imageUrl: user.imageUrl,
        email: user.email,
        password: user.password,
        name: user.name,
      },
    });
  }
}
