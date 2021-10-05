/* eslint-disable prettier/prettier */
import { Field, InputType, ID } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';
//this is the dto
@InputType()
export class createLessonInput {
  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  @IsUUID("4", { each: true })
  students: string[];
}
