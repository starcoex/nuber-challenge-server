import { CoreEntity } from 'src/common/entities/core.entity';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('EpisodeInputType', { isAbstract: true })
@ObjectType()
export class Episode extends CoreEntity {
  @Field(() => String)
  title: string;

  @Field(() => String)
  category: string;

  @Field(() => Int)
  rating: number;
}
