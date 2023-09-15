import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodetInput } from './dto/create-episode.dto';
import { UpdateEpisodeInput } from './dto/update-episode.dto';

@Controller('/podcasts/:id/episode')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post()
  createEpisode(@Body() createEpisodetInput: CreateEpisodetInput) {
    return this.episodeService.createEpisode(createEpisodetInput);
  }

  @Get()
  seeEpisodes() {
    return this.episodeService.seeEpisodes();
  }

  @Get(':id')
  seeEpisode(@Param('id') id: string) {
    return this.episodeService.seeEpisode(+id);
  }

  @Patch(':id')
  updateEpisode(
    @Param('id') id: string,
    @Body() updateEpisodeInput: UpdateEpisodeInput,
  ) {
    return this.episodeService.updateEpisode(+id, updateEpisodeInput);
  }

  @Delete(':id')
  deleteEpisode(@Param('id') id: string) {
    return this.episodeService.deleteEpisode(+id);
  }
}
