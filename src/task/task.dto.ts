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
export class SubtaskDto {
    // @IsInt()
    // id: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsBoolean()
  done: boolean;
  taskId: number;
}
