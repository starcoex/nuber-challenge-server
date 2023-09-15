import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Episode } from 'src/episode/entities/episode.entity';

@InputType('PodcastInputType', { isAbstract: true })
@ObjectType()
export class Podcast extends CoreEntity {
  @Field(() => String)
  title: string;

  @Field(() => String)
  category: string;

  @Field(() => Int)
  rating: number;

  @Field(() => [Episode])
  episodes: Episode[];
}
