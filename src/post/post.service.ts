import {db} from '../utils/db.server';

export type Post = {
  id: number;
  title: string;
  synopsis?: string;
  releaseYear: Date;
  genres: string;
};

export const listPosts = async () => {
  return db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      comments: true,
      author: true,
      authorId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getPostById = async (id: number) => {
  return db.post.findUnique({
    where: {
      id,
    },
  });
};

export const getPostsByQuery = async (queryParams: any) => {
  return db.post.findMany({
    where: {
      ...queryParams,
    },
  });
};
