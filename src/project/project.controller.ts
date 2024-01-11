import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Public } from 'src/auth/constants';
import { ProjectDto } from './project.dto';
import { ProjectService } from './project.service';

@Controller('')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/projects')
  @Public()
  // @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  async getAll() {
    return this.projectService.getAll();
  }
  @Get('/projects/:id')
  @Public()
  // @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  async getProjectById(@Param('id') id: string) {
    return this.projectService.getProjectById(id);
  }
  @Post('/projects')
  @Public()
  @UsePipes(new ValidationPipe())
  async createProject(@Body() dto: ProjectDto, @Param('id') id: string) {
    return this.projectService.createProject(dto);
  }
}
