/* eslint-disable prettier/prettier */
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
//for the id we need to explicitly set the type as graphql id
  @Field( type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
