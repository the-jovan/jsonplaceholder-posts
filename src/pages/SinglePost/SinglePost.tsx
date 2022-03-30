import { ReactElement, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Post from "../../components/Post/Post";
import { IComment } from "../../models/Comment.model";

import { IPost } from "../../models/Post.model";
import { IUser } from "../../models/User.model";

import { getPost, getUser, getComments } from "../../services/posts.service";

const SinglePost = (): ReactElement => {
  const [postData, setPostData] = useState<IPost>();
  const [userData, setUserData] = useState<IUser>();
  const [commentsData, setCommentsData] = useState<IComment[]>();
  const [invalidUrl, setInvalidUrl] = useState<boolean>(false);

  const location = useLocation() as {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: {
      postData: IPost;
      userData: IUser;
      commentsData: IComment[];
    };
  };

  useEffect(() => {
    if (!location.state) {
      getPost(location.pathname.split("/")[2])
        .then((resp: IPost) => {
          setPostData(resp);

          getUser(resp.userId).then((resp: IUser) => setUserData(resp));
          getComments(resp.id).then((resp: IComment[]) =>
            setCommentsData(resp)
          );
        })
        .catch((err) => {
          if (err.response.status === 404) setInvalidUrl(true);
        });
    }
  }, [location]);

  if (invalidUrl) {
    return (
      <>
        <h1>404, post not found</h1>
        <span>Check out our other </span>
        <Link to="/posts">posts</Link>;
      </>
    );
  }

  if (location.state) {
    return (
      <Post
        postData={location.state.postData}
        userData={location.state.userData}
        commentsData={location.state.commentsData}
      />
    );
  }
  return (
    <>
      {postData && (
        <Post
          postData={postData!}
          userData={userData!}
          commentsData={commentsData!}
        />
      )}
    </>
  );
};

export default SinglePost;
