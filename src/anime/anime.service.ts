import {db} from '../utils/db.server';

export type Anime = {
  id: number;
  title: string;
  synopsis?: string;
  releaseYear: Date;
  genres: string;
};

export const listAnimes = async () => {
  return db.anime.findMany({
    select: {
      id: true,
      title: true,
      releaseYear: true,
      synopsis: true,
      genres: true,
      studio: true,
      studioId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
