import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Student } from '../entities/student.entity';
import { Subject } from '../entities/subject.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.lessons)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.lessons)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @Column()
  timestamp: Date;
}


