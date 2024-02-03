import {db} from '../utils/db.server';

export type Post = {
  id: number;
  title: string;
  content?: string;
  releaseYear: Date;
  genres: string;
  authorId: number;
};

/* GET */
export const listPosts = async () => {
  return db.post.findMany({
    select: {
      id: true,
      title: true,
      synopsis: true,
      genres: true,
      reviews: true,
      coverImage: true,
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
    include: {
      author: true,
      reviews: true,
    },
  });
};

export const getPostsByQuery = async (queryParams: any, max: number) => {
  if (max) {
    return db.post.findMany({
      take: max,
      where: {
        ...queryParams,
      },
      include: {
        author: true,
        reviews: true,
      },
    });
  }

  return db.post.findMany({
    where: {
      ...queryParams,
    },
    include: {
      author: true,
      reviews: true,
    },
  });
};

/* POST */
export const createPost = async (data: Post) => {
  return db.post.create({
    data: {
      title: data.title,
      synopsis: data.content,
      author: {
        connect: {
          id: data.authorId,
        },
      },
    },
  });
};

export const deletePost = async (id: number) => {
  return db.post.delete({
    where: {id},
  });
};

/* UPDATE */
export const updatePost = async (id: number, data: any) => {
  return db.post.update({
    where: {id},
    data: {
      ...data,
    },
    select: {
      id: true,
      reviews: true,
      title: true,
      synopsis: true,
      coverImage: true,
      genres: true,
      authorId: true,
      author: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
