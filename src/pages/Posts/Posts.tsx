import { useState, ReactElement, FunctionComponent, useContext } from "react";
import "./_posts.scss";

import { IPost } from "../../models/Post.model";
import {
  getAllComments,
  getPosts,
  getUsers,
} from "../../services/posts.service";
import useFetchData from "../../hooks/useFetchData";

import Post from "../../components/Post/Post";
import Input from "../../components/Input/Input";
import loggerComponent from "../../hocs/loggerComponent";

import { PostsContext } from "../../store/posts.context";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";

const LoggedPost = loggerComponent(Post);

const Posts: FunctionComponent = (): ReactElement => {
  const postsContext = useContext(PostsContext);
  const { posts } = useFetchData({
    item: "posts",
    contextItem: postsContext?.posts as IPost[],
    setContextItem: (val: any) => postsContext?.setPosts(val),
    callFn: () => getPosts(),
  });
  const { users } = useFetchData({
    item: "users",
    contextItem: postsContext?.users as IUser[],
    setContextItem: (val: any) => postsContext?.setUsers(val),
    callFn: () => getUsers(),
  });
  const { comments } = useFetchData({
    item: "comments",
    contextItem: postsContext?.comments as IComment[],
    setContextItem: (val: any) => postsContext?.setComments(val),
    callFn: () => getAllComments(),
  });

  const [filter, setFilter] = useState<{
    term: string;
    posts: IPost[];
  }>({
    term: "",
    posts: [],
  });

  const filterPosts = (e: any) => {
    let filteredPosts = posts.filter((post: IPost) => post.body.includes(e));

    setFilter({
      term: e,
      posts: filteredPosts,
    });
  };

  const renderPosts = (postsArr: IPost[]) => {
    return postsArr.map((post: IPost) => (
      <LoggedPost
        helloMsg="Hello from"
        componentName="Post"
        key={post.id}
        link={post.id}
        userData={users.find((user: IUser) => user.id === post.userId)!}
        postData={post}
        commentsData={comments}
      />
    ));
  };

  return (
    <div className="posts">
      <Input
        type="text"
        changeFn={filterPosts}
        value={filter.term}
        placeholder="Filter posts"
      />
      <div className="posts__wrapper">
        {filter.term ? renderPosts(filter.posts) : renderPosts(posts)}
      </div>
    </div>
  );
};

export default Posts;
