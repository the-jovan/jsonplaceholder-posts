import { FunctionComponent, ReactElement } from "react";

import { IUser } from "../../models/User.model";
import { IPost } from "../../models/Post.model";
import { IComment } from "../../models/Comment.model";

import User from "../User/User";
import Comment from "../Comment/Comment";

const Post: FunctionComponent<{
  postData: IPost;
  userData: IUser;
  commentsData: IComment[];
}> = ({ postData, userData, commentsData }): ReactElement => {
  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </div>
      <User userData={userData} />
      {commentsData.map((comment: IComment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
};

export default Post;
