import { useState, useEffect, useContext, ReactElement } from "react";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";
import { PostsContext } from "../../store/posts.context";

const postFormatter =
  (Component: any) =>
  ({ postData, hasLink }: any): ReactElement => {
    const [userData, setUserData] = useState<IUser>();
    const [commentsData, setCommentsData] = useState<IComment[]>();

    const postsContext = useContext(PostsContext);

    useEffect(() => {
      if (!postData) return;

      if (postsContext?.users.find((user) => user.id === postData.userId)) {
        setUserData(
          postsContext.users.find((user) => user.id === postData.userId)
        );
      }

      //! Comments baguje
      if (
        postsContext?.comments.find((comment) => comment.postId === postData.id)
      ) {
        setCommentsData(
          postsContext?.comments.filter(
            (comment) => comment.postId === postData.id
          )
        );
      }
    }, []);

    return (
      <Component
        postData={postData}
        userData={userData}
        commentsData={commentsData}
        hasLink={hasLink}
      />
    );
  };

export default postFormatter;
