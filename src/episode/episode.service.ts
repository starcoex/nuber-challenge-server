import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodetInput } from './dto/create-episode.dto';
import { Episode } from './entities/episode.entity';
import { UpdateEpisodeInput } from './dto/update-episode.dto';

@Injectable()
export class EpisodeService {
  private episodes: Episode[] = [];
  private id = 0;

  createEpisode(createEpisodeInput: CreateEpisodetInput) {
    this.episodes.push({
      id: ++this.id,
      ...createEpisodeInput,
      createdAt: new Date(),
    });
  }

  seeEpisodes() {
    return [...this.episodes];
  }

  seeEpisode(id: number) {
    const found = this.episodes.find((episode) => episode.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  updateEpisode(id: number, updatePodcastInput: UpdateEpisodeInput) {
    const episode = this.seeEpisode(id);
    this.episodes.push({
      ...episode,
      ...updatePodcastInput,
      updatedAt: new Date(),
    });
  }

  deleteEpisode(id: number) {
    this.seeEpisode(id);
    this.episodes = this.episodes.filter((episode) => episode.id !== id);
  }
}
