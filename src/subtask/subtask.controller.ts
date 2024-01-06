import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Public } from 'src/auth/constants';
import { SubtaskDto } from './subtask.dto';
import { SubtaskService } from './subtask.service';

@Controller('')
export class SubtaskController {
  constructor(private readonly subtaskService: SubtaskService) {}

  @Post('/tasks/:id/subtasks')
  @Public()
  @UsePipes(new ValidationPipe())
  async createSubtask(@Body() dto: SubtaskDto, @Param('id') id: string) {
    return this.subtaskService.createSub(dto, id);
  }
  @Patch('/tasks/:taskId/subtasks/:subtaskId')
  @Public()
  async updateSubtask(
    @Body() dto: SubtaskDto,
    @Param('subtaskId') subtaskId: string,
    @Param('taskId') taskId: string,
  ) {
    return this.subtaskService.updateSubtask(dto, subtaskId, taskId);
  }
  @Get('/tasks/:id/subtasks')
  @Public()
  @Header('Access-Control-Allow-Origin', 'http://localhost:5173')
  async getSubtasksByTaskId(@Param('id') id: string) {
    return (await this.subtaskService.getSubtasksByTaskId(id)).sort(
      (a, b) => b.id - a.id,
    );
  }
  @Get('/tasks/:taskId/subtasks/:subtaskId')
  @Public()
  async getSubtaskById(
    @Param('taskId') taskId: string,
    @Param('subtaskId') subtaskId: string,
  ) {
    return this.subtaskService.getSubtaskById(subtaskId, taskId);
  }
}
