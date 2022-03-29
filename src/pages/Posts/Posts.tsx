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

import postFormatter from "../../components/postFormatter/postFormatter";
import Post from "../../components/Post/Post";

import { PostsContext } from "../../store/posts.context";

const FormattedPost = postFormatter(Post);

const Posts: FunctionComponent = (): ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const postsContext = useContext(PostsContext);

  useEffect(() => {
    /* Not the best idea but for now:
      Check if all posts, users and comments are fetched (when trying to display all posts)
      if they are not (or some are not) use endpoint that returns everyone, instead of
      going post-by-post to fetch one-by-one
    */

    if (postsContext?.posts.length !== 100) {
      getPosts().then((resp) => {
        setPosts(resp);
        postsContext?.setPosts(resp);
      });
    } else {
      setPosts(postsContext.posts);
    }

    if (postsContext?.users.length !== 10) {
      getUsers().then((resp) => {
        postsContext?.setUsers(resp);
      });
    }

    if (postsContext?.comments.length !== 500) {
      getAllComments().then((resp) => {
        postsContext?.setComments(resp);
      });
    }
  }, []);

  return (
    <>
      <button onClick={() => console.log(postsContext)}>Log context</button>
      {/* we're passing user/comment/post data here to display them via navigate
      state, so that we avoid refetching post (unless we get there directly, which
      will be added shortly) */}
      {posts.map((post: IPost) => (
        <FormattedPost
          key={post.id}
          postData={post}
          hasLink={post.id}
          userData
          commentsData
        />
      ))}
    </>
  );
};

export default Posts;
