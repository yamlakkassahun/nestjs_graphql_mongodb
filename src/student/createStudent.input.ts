import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

//this is the dto
@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(1)
  firstName: string;

  @Field()
  @MinLength(1)
  lastName: string;
}
