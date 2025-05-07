// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Lesson } from './domain/entities/lesson.entity';
import { Student } from './domain/entities/student.entity';
import { Subject } from './domain/entities/subject.entity';
import { LessonsModule } from './lessons.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Lesson, Student, Subject],
      synchronize: true, // solo para desarrollo
      logging: true, // Habilita el logging de las queries
    }),
    LessonsModule,
  ],
})
export class AppModule {}
