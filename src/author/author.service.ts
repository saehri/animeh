import {db} from '../utils/db.server';

type Author = {
  id: number;
  name: string;
  email: string;
  password: string;
  hashedPassword: string;
  posts?: [];
  comments?: [];
};

/* GET */
export const listAuthor = async () => {
  return db.author.findMany({
    select: {
      id: true,
      comments: true,
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
      comments: true,
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
      comments: true,
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
