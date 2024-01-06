import { IsBoolean, IsInt, IsString } from 'class-validator';
export class TaskDto {
  //   @IsInt()
  //   id: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  status: string;
  @IsString()
  group: string;
  projectId: number;
}
export class UserDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  imageUrl: string;
}
export class GetUserDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
