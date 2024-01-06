import { IsBoolean, IsString } from 'class-validator';

export class ProjectDto {
  id: number;
  @IsString()
  name: string;
  @IsString()
  overview: string;
}
