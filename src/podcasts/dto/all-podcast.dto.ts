import { InputType, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';
import { CoreOutput } from 'src/common/entities/dtos/output.dto';

@InputType()
export class PodcastAllInput {}

@ObjectType()
export class PodcastAllOutput extends CoreOutput {
  podcasts: Podcast[];
}
