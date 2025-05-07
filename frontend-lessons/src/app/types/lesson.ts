export interface Subject {
    id: number;
    name: string;
  }
  
  export interface Student {
    id: number;
    username: string;
  }
  
  export interface Lesson {
    id: number;
    timestamp: string;
    student: Student;
    subject: Subject;
  }
  