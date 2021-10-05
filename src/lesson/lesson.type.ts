/* eslint-disable prettier/prettier */
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('Lesson')
export class LessonType {
//for the id we need to explicitly set the type as graphql id
  @Field( type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => [StudentType])
  students: string[];
}
