import { createContext, useState } from "react";

import { IPost } from "../models/Post.model";
import { IUser } from "../models/User.model";
import { IComment } from "../models/Comment.model";

interface IPostsContext {
  users: IUser[];
  posts: IPost[];
  comments: IComment[];
  setUsers: any;
  setPosts: any;
  setComments: any;
}

export const PostsContext = createContext<IPostsContext | null>(null);

const PostsProvider = (props: any) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  return (
    <PostsContext.Provider
      value={{
        users: users,
        posts: posts,
        comments: comments,
        setUsers,
        setPosts,
        setComments,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
