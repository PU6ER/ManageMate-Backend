import { IsBoolean, IsString } from "class-validator";

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