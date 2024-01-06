import { Module } from '@nestjs/common';
import { SubtaskService } from './subtask.service';
import { SubtaskController } from './subtask.controller';
import { PrismaService } from './../prisma.service';

@Module({
  controllers: [SubtaskController],
  providers: [SubtaskService, PrismaService],
})
export class SubtaskModule {}
