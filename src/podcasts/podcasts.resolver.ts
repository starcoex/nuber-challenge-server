import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PodcastsService } from './podcasts.service';
import {
  CreatePodcastInput,
  CreatePodcastOutput,
} from './dto/create-podcast.dto';
import { PodcastAllOutput } from './dto/all-podcast.dto';

@Resolver()
export class PodcastsResolver {
  [x: string]: any;
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => PodcastAllOutput)
  async seePodcasts() {
    return [...this.podcasts];
  }

  @Mutation(() => CreatePodcastOutput)
  createPodcast(
    @Args('createPodcastInput') createPodcastInput: CreatePodcastInput,
  ): Promise<CreatePodcastOutput> {
    return this.podcastsService.createPodcast(createPodcastInput);
  }
}
