import { PrismaService } from './../prisma.service';
import { TaskDto, SubtaskDto } from './task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getByProjectId(id: string) {
    const task = await this.prisma.task.findMany({
      where: {
        projectId: +id,
      },
    });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  getAll() {
    return this.prisma.task.findMany();
  }
  createTask(dto: TaskDto, id: number) {
    return this.prisma.task.create({
      data: { ...dto, projectId: id },
    });
  }

  deleteTask(id: string) {
    return this.prisma.task.delete({ where: { id: +id } });
  }
  updateTaskStatus(dto: string, id: string) {
    return this.prisma.task.update({
      where: { id: +id },
      data: { status: dto },
    });
  }
  //   async toggleDone(id: string) {
  //     const task = await this.getById(id);
  //     return this.prisma.task.update({
  //       where: {
  //         id: task.id,
  //       },
  //       data: {
  //         isDone: !task.isDone,
  //       },
  //     });
  //   }
}
