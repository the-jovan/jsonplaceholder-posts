import {
  useState,
  useEffect,
  ReactElement,
  FunctionComponent,
  useContext,
} from "react";
import "./_posts.scss";

import { IPost } from "../../models/Post.model";
import {
  getAllComments,
  getPosts,
  getUsers,
  errorNotification,
} from "../../services/posts.service";

import Post from "../../components/Post/Post";
import Input from "../../components/Input/Input";
import loggerComponent from "../../hocs/loggerComponent";

import { PostsContext } from "../../store/posts.context";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";
import { toast } from "react-toastify";

const LoggedPost = loggerComponent(Post);

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
      getPosts()
        .then((resp) => {
          setPosts(resp);
          postsContext?.setPosts(resp);
        })
        .catch((err) => {
          console.error(err);
          errorNotification("Something went wrong getting all posts.");
          setPosts([]);
        });
    } else {
      setPosts(postsContext.posts);
    }

    if (!postsContext?.users.length) {
      getUsers()
        .then((resp) => {
          setUsers(resp);
          postsContext?.setUsers(resp);
        })
        .catch((err) => {
          console.error(err);
          errorNotification("Something went wrong getting all users.");
          setUsers([]);
        });
    } else {
      setUsers(postsContext?.users);
    }

    if (!postsContext?.comments.length) {
      getAllComments()
        .then((resp) => {
          setComments(resp);
          postsContext?.setComments(resp);
        })
        .catch((err) => {
          console.error(err);
          errorNotification("Something went wrong getting all comments.");
          setComments([]);
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
      <LoggedPost
        helloMsg="Hello from"
        componentName="Post"
        key={post.id}
        link={post.id}
        userData={users.find((user) => user.id === post.userId)!}
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
