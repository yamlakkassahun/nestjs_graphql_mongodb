/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { createLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver( of => LessonType)
export class LessonResolver {
    constructor (
      private lessonService: LessonService,
    ) {}

    @Query( returns => LessonType)
    lesson(
      @Args('id') id: string,
    ) {
      return this.lessonService.getLesson(id);
    }

    @Mutation( returns => LessonType )
    createLesson(
      @Args('createLessonInput') createLessonInput: createLessonInput,
    ) { 
      return this.lessonService.createLesson( createLessonInput );
    }
}
