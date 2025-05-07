import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from '../entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,
  ) {}

  findByUsername(username: string): Promise<Lesson[]> {
    const lessons = this.lessonRepo.find({
      relations: ['student', 'subject'],
      where: {
        student: {
          username,
        },
      },
    });
  
    return lessons;
  }

  async findById(id: number): Promise<Lesson | null> {
    return this.lessonRepo.findOne({
      where: { id },
      relations: {
        student: true,
        subject: true,
      },
    });
  }
  
}
