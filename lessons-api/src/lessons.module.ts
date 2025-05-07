import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './domain/entities/lesson.entity';
import { LessonsService } from './domain/services/lessons.service';
import { LessonsController } from './application/lessons.controller';
import { Student } from './domain/entities/student.entity';
import { Subject } from './domain/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Student, Subject])],
  providers: [LessonsService],
  controllers: [LessonsController],
})
export class LessonsModule {}
