import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePodcastInput } from './dto/update-podcast.dto';
import { CreatePodcastInput } from './dto/create-podcast.dto';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];
  private id = 0;

  async createPodcast({ title, category, rating }: CreatePodcastInput) {
    this.podcasts.push({
      id: ++this.id,
      title,
      category,
      rating,
      episodes: [],
    });
    return {
      ok: true,
    };
  }

  seePodcasts() {
    return [...this.podcasts];
  }

  seePodcast(id: number) {
    const found = this.podcasts.find((podcast) => podcast.id === id);
    if (!found) throw new NotFoundException();
    return found;
  }

  updatePodcast(id: number, updatePodcastInput: UpdatePodcastInput) {
    const podcast = this.seePodcast(id);
    this.podcasts.push({
      ...podcast,
      ...updatePodcastInput,
      updatedAt: new Date(),
    });
  }

  deletePodcast(id: number) {
    this.seePodcast(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== id);
  }
}
