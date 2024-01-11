import { SubtaskDto, TaskDto } from './task.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Public } from 'src/auth/constants';

@Controller('')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTaks() {
    return this.taskService.getAll();
  }
  @Get('/projects/:id/tasks')
  @Public()
  // @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  async getTasksByProject(@Param('id') id: string) {
    return this.taskService.getByProjectId(id);
  }
  @Post('/projects/:id/tasks')
  @Public()
  // @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  @UsePipes(new ValidationPipe())
  async createTask(@Body() dto: TaskDto, @Param('id') id: string) {
    return this.taskService.createTask(dto, +id);
  }

  @Delete('/tasks/:id')
  @Public()
  // @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch('/tasks/:id/:status')
  @Public()
  async updateTaskStatus(
    @Param('id') id: string,
    @Param('status') status: string,
  ) {
    return this.taskService.updateTaskStatus(status, id);
  }
  // @Patch(':id')
  // async toggleDone(@Param('id') id: string) {
  //   return this.taskService.toggleDone(id)
  // }
}
