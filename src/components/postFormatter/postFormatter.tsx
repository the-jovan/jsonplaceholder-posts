import { useState, useEffect, ReactElement } from "react";
import { IUser } from "../../models/User.model";
import { IComment } from "../../models/Comment.model";
import { getUser, getComments } from "../../services/posts.service";

const postFormatter =
  (Component: any) =>
  ({ postData }: any): ReactElement => {
    const [userData, setUserData] = useState<IUser>();
    const [commentsData, setCommentsData] = useState<IComment[]>([]);

    useEffect(() => {
      // fetch comments and user for each post, since
      // comments have their own ep accessed via "id"
      // and user also
      if (postData) {
        getUser(postData.userId).then((resp: IUser) => setUserData(resp));
        getComments(postData.id).then((resp: IComment[]) =>
          setCommentsData(resp)
        );
      }
    }, []);

    return (
      <Component
        postData={postData}
        userData={userData}
        commentsData={commentsData}
      />
    );
  };

export default postFormatter;
