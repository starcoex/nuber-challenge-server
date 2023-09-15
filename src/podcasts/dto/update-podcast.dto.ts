import { PartialType } from '@nestjs/graphql';
import { CreatePodcastInput } from './create-podcast.dto';

export class UpdatePodcastInput extends PartialType(CreatePodcastInput) {}
