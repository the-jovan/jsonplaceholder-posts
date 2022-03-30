import {
  useState,
  useEffect,
  ReactElement,
  FunctionComponent,
  useContext,
} from "react";

import { IPost } from "../../models/Post.model";
import {
  getAllComments,
  getPosts,
  getUsers,
} from "../../services/posts.service";

import Post from "../../components/Post/Post";
import Input from "../../components/Input/Input";

import { PostsContext } from "../../store/posts.context";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";

const Posts: FunctionComponent = (): ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  const [filter, setFilter] = useState<{
    term: string;
    posts: IPost[];
  }>({
    term: "",
    posts: [],
  });

  const postsContext = useContext(PostsContext);

  useEffect(() => {
    if (!postsContext?.posts.length) {
      getPosts().then((resp) => {
        setPosts(resp);
        postsContext?.setPosts(resp);
      });
    } else {
      setPosts(postsContext.posts);
    }

    if (!postsContext?.users.length) {
      getUsers().then((resp) => {
        setUsers(resp);
        postsContext?.setUsers(resp);
      });
    } else {
      setUsers(postsContext?.users);
    }

    if (!postsContext?.comments.length) {
      getAllComments().then((resp) => {
        setComments(resp);
        postsContext?.setComments(resp);
      });
    } else {
      setComments(postsContext.comments);
    }
  }, []);

  const filterPosts = (e: any) => {
    let filteredPosts = posts.filter((post: IPost) => post.body.includes(e));

    setFilter({
      term: e,
      posts: filteredPosts,
    });
  };

  const renderPosts = (postsArr: IPost[]) => {
    return postsArr.map((post: IPost) => (
      <Post
        key={post.id}
        link={post.id}
        userData={users.find((user) => user.id === post.userId)!}
        postData={post}
        commentsData={comments}
      />
    ));
  };

  return (
    <>
      <Input
        type="text"
        changeFn={filterPosts}
        value={filter.term}
        placeholder="Filter posts"
      />
      {filter.term ? renderPosts(filter.posts) : renderPosts(posts)}
    </>
  );
};

export default Posts;
