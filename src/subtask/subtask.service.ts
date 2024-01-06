import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { SubtaskDto } from './subtask.dto';

@Injectable()
export class SubtaskService {
  constructor(private prisma: PrismaService) {}

  getSubtasksByTaskId(id: string) {
    return this.prisma.subtask.findMany({
      where: {
        taskId: +id,
      },
    });
  }
  getSubtaskById(subtaskId, taskId) {
    return this.prisma.subtask.findUnique({
      where: {
        taskId: +taskId,
        id: +subtaskId,
      },
    });
  }

  createSub(dto: SubtaskDto, id: string) {
    return this.prisma.subtask.create({
      data: { ...dto, taskId: +id },
    });
  }
  updateSubtask(dto: SubtaskDto, id: string, taskId: string) {
    return this.prisma.subtask.update({
      where: { id: +id, taskId: +taskId },
      data: { done: dto.done, name: dto.name, description: dto.description },
    });
  }
}
