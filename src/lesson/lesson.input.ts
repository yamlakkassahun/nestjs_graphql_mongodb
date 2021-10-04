import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createLessonInput {
  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
