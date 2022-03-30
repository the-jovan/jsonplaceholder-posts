import axios from "axios";

import { IUser } from "../models/User.model";
import { IPost } from "../models/Post.model";
import { IComment } from "../models/Comment.model";

export const getPosts = async () => {
  const { data } = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const getPost = async (id: string) => {
  const { data } = await axios.get<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export const getComments = async (id: number) => {
  const { data } = await axios.get<IComment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
};

export const getAllComments = async () => {
  const { data } = await axios.get<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments`
  );
  return data;
};

export const getUser = async (id: number) => {
  const { data } = await axios.get<IUser>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get<IUser[]>(
    `https://jsonplaceholder.typicode.com/users`
  );
  return data;
};
