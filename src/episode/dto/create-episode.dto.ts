import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';
import { CoreOutput } from 'src/common/entities/dtos/output.dto';

@InputType()
export class CreateEpisodetInput extends PickType(Episode, [
  'id',
  'category',
  'title',
  'rating',
]) {}

@ObjectType()
export class CreateEpisodetOutput extends CoreOutput {
  @Field(() => Episode)
  episode: Episode;
}
