import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Post from "../../components/Post/Post";
import { IComment } from "../../models/Comment.model";

import { IPost } from "../../models/Post.model";
import { IUser } from "../../models/User.model";

const SinglePost = (): ReactElement => {
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
    console.log(location);
  }, [location]);

  if (location) {
    return (
      <Post
        postData={location.state.postData}
        userData={location.state.userData}
        commentsData={location.state.commentsData}
      />
    );
  }

  return <div>fallback</div>;
};

export default SinglePost;
