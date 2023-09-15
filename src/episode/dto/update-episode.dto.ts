import { PartialType } from '@nestjs/graphql';
import { CreateEpisodetInput } from './create-episode.dto';

export class UpdateEpisodeInput extends PartialType(CreateEpisodetInput) {}
