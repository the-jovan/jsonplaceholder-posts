import { FunctionComponent, ReactElement } from "react";
import "./_post.scss";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../models/User.model";
import { IPost } from "../../models/Post.model";
import { IComment } from "../../models/Comment.model";

import User from "../User/User";
import Comment from "../Comment/Comment";

const Post: FunctionComponent<{
  postData: IPost;
  userData: IUser;
  commentsData: IComment[];
  hasLink?: string;
}> = ({ postData, userData, commentsData, hasLink }): ReactElement => {
  console.log(commentsData);

  const navigate = useNavigate();

  const onGoToPost = () => {
    /* hasLink will act as link (!rename it!), so if we pass any link (done on Posts
      page), we pass post state with it as well
      if there is no link, then we need to fetch post data (if there is not one in
        context)
      */
    if (hasLink) {
      navigate(`/post/${hasLink}`, {
        state: { postData, userData, commentsData },
        replace: false,
      });
    } else {
      console.log("no has link");
    }
  };

  return (
    <div className="post" onClick={onGoToPost}>
      <div>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </div>
      <User userData={userData} />
      {commentsData?.map((comment: IComment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
};

export default Post;
