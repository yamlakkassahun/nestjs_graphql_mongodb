/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./createStudent.input";


@Resolver(of => StudentType)
export class StudentResolver {
    constructor (
      private studentService: StudentService,
    ) {}

    //The Lesson Type needs to be in brasses to return all the lessons
    // @Query( returns => [StudentType])
    // lessons() {
    //   return this.lessonService.getAllLessons();
    // }

    // @Query( returns => StudentType)
    // lesson(
    //   @Args('id') id: string,
    // ) {
    //   return this.lessonService.getLesson(id);
    // }


    @Mutation(returns => StudentType)
    async createStudent(
      @Args('createStudentInput') createStudentInput: CreateStudentInput,
    ) { 
      return this.studentService.createStudent(createStudentInput);
    }
}
