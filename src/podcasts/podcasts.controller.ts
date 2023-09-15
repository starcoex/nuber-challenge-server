import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { UpdatePodcastInput } from './dto/update-podcast.dto';
import { CreatePodcastInput } from './dto/create-podcast.dto';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Post()
  createPodcast(@Body() createPodcastInput: CreatePodcastInput) {
    return this.podcastsService.createPodcast(createPodcastInput);
  }

  @Get()
  seePodcasts() {
    return this.podcastsService.seePodcasts();
  }

  @Get(':id')
  seePodcast(@Param('id') id: string) {
    return this.podcastsService.seePodcast(+id);
  }

  @Patch(':id')
  updatePodcast(
    @Param('id') id: string,
    @Body() updatePodcastInput: UpdatePodcastInput,
  ) {
    return this.podcastsService.updatePodcast(+id, updatePodcastInput);
  }

  @Delete(':id')
  deletePodcast(@Param('id') id: string) {
    return this.podcastsService.deletePodcast(+id);
  }
}
