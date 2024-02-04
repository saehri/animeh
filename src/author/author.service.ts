import {db} from '../utils/db.server';

type Author = {
  id: number;
  name: string;
  email: string;
  password: string;
  hashedPassword: string;
  posts?: [];
  reviews?: [];
};

/* GET */
export const listAuthor = async () => {
  return db.author.findMany({
    select: {
      id: true,
      reviews: true,
      name: true,
      email: true,
      posts: true,
      isAdmin: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getAuthorById = async (id: number) => {
  return db.author.findUnique({
    where: {id},
    include: {
      posts: true,
      reviews: true,
    },
  });
};

export const getAuthorPost = async (authorId: number, postId: number) => {
  return db.author.findUnique({
    where: {id: authorId},
    select: {
      posts: {
        where: {id: postId},
      },
    },
  });
};

export const getAuthorByQuery = async (query: any) => {
  return db.author.findMany({
    where: {...query},
  });
};

/* POST */
export const createAuthor = async (data: Author) => {
  return db.author.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      hashedPassword: data.hashedPassword,
    },
  });
};

/* UPDATE */
export const updateAuthor = async (id: number, data: any) => {
  return db.author.update({
    where: {id},
    data: {
      ...data,
    },
    select: {
      id: true,
      reviews: true,
      name: true,
      email: true,
      posts: true,
      createdAt: true,
      isAdmin: true,
      updatedAt: true,
    },
  });
};

/* DELETE */
export const deleteAuthor = async (id: number) => {
  return db.author.delete({
    where: {id},
  });
};
