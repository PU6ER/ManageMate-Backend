import { ProjectDto } from './project.dto';
import { PrismaService } from './../prisma.service';
import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.project.findMany();
  }
  getProjectById(id: string) {
    return this.prisma.project.findUnique({ where: { id: +id } });
  }
  createProject(dto: ProjectDto) {
    return this.prisma.project.create({
      data: dto,
    });
  }
}
