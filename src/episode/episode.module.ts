import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { EpisodeResolver } from './episode.resolver';

@Module({
  controllers: [EpisodeController],
  providers: [EpisodeService, EpisodeResolver],
})
export class EpisodeModule {}
