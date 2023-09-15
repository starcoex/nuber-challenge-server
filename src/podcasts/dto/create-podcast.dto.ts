import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';
import { CoreOutput } from 'src/common/entities/dtos/output.dto';

@InputType()
export class CreatePodcastInput extends PickType(Podcast, [
  'id',
  'title',
  'category',
  'rating',
]) {}

@ObjectType()
export class CreatePodcastOutput extends CoreOutput {
  @Field(() => Podcast)
  podcast?: Podcast;
}
