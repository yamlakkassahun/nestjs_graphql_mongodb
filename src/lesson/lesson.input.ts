import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';
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
}
