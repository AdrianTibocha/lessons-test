import { Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from '../domain/services/lessons.service';
import { Lesson } from '../domain/entities/lesson.entity';

@Controller()
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get('lessons/:username')
  async getLessonsByUser(@Param('username') username: string): Promise<Lesson[]> {
    return this.lessonsService.findByUsername(username); 
  }

  @Get('lesson/:id')
  getLessonById(@Param('id') id: number): Promise<Lesson | null> {
    return this.lessonsService.findById(+id);
  }
}
