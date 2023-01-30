import { CourseModel} from "./course.modul"

export interface StudentModel {
    id: number;
    name: string;
    age: number;
    email: string;
    password:string;
    courseId: CourseModel;
    images: string[];

};

export interface CreateStudentDto extends Omit<StudentModel, 'id' | 'courseId'> {
    courseId: number;
}

export interface UpdateStudentDto extends Partial<StudentModel>{
    courseId?: CourseModel;
}