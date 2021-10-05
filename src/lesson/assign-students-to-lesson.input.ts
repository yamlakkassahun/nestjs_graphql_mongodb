/* eslint-disable prettier/prettier */
import { Field, InputType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
//this is the dto
@InputType()
export class AssignStudentsToLessonInput {
  @Field(type => ID)
  @IsUUID()
  lessonId: string;

  @Field(type => [ID])
  @IsUUID("4", { each: true })
  studentIds: string[];
}
