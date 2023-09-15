import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { PodcastsController } from './podcasts.controller';
import { PodcastsResolver } from './podcasts.resolver';

@Module({
  controllers: [PodcastsController],
  providers: [PodcastsService, PodcastsResolver],
})
export class PodcastsModule {}
