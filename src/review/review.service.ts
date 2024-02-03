import {db} from '../utils/db.server';

export type Review = {
  id: number;
  likertScale: number;
  content: string;
  authorId: number;
  postId: number;
};

/* GET */
export const listReviews = async () => {
  return db.review.findMany({
    select: {
      id: true,
      content: true,
      likertScale: true,
      postId: true,
      author: true,
      authorId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getReviewsByUser = async (authorId: number, postId: number) => {
  return db.review.findMany({
    where: {
      authorId,
      postId,
    },
  });
};

export const getReviewById = async (id: number) => {
  return db.review.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
};

export const getReviewsByQuery = async (queryParams: any, max: number) => {
  if (max) {
    return db.review.findMany({
      take: max,
      where: {
        ...queryParams,
      },
      include: {
        author: true,
      },
    });
  }

  return db.review.findMany({
    where: {
      ...queryParams,
    },
    include: {
      author: true,
    },
  });
};

/* POST */
export const createReview = async (data: Review) => {
  return db.review.create({
    data: {
      likertScale: data.likertScale,
      content: data.content,
      author: {
        connect: {
          id: data.authorId,
        },
      },
      post: {
        connect: {
          id: data.postId,
        },
      },
    },
  });
};

export const deleteReview = async (id: number) => {
  return db.review.delete({
    where: {id},
  });
};

/* UPDATE */
export const updateReview = async (id: number, data: any) => {
  return db.review.update({
    where: {id},
    data: {
      ...data,
    },
    select: {
      id: true,
      likertScale: true,
      content: true,
      post: true,
      postId: true,
      authorId: true,
      author: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};
