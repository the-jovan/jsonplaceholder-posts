import { useState, useEffect, ReactElement, FunctionComponent } from "react";

import { IPost } from "../../models/Post.model";
import { getPosts } from "../../services/posts.service";

import postFormatter from "../../components/postFormatter/postFormatter";
import Post from "../../components/Post/Post";

const FormattedPost = postFormatter(Post);

const Posts: FunctionComponent = (): ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts().then((resp) => setPosts(resp));
  }, []);

  return (
    <>
      {posts.map((post: IPost) => (
        <FormattedPost key={post.id} postData={post} />
      ))}
    </>
  );
};

export default Posts;
