import { FunctionComponent } from "react";
import "./_post.scss";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../models/User.model";
import { IPost } from "../../models/Post.model";
import { IComment } from "../../models/Comment.model";

import User from "../User/User";
import PostInfo from "../PostInfo/PostInfo";
import Comment from "../Comment/Comment";
import loggerComponent from "../../hocs/loggerComponent";

const LoggedUser = loggerComponent(User);
const LoggedPostInfo = loggerComponent(PostInfo);
const LoggedComment = loggerComponent(Comment);

const Post: FunctionComponent<{
  userData: IUser;
  postData: IPost;
  commentsData: IComment[];
  link?: number;
}> = ({ userData, postData, commentsData, link }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/post/${link}`, {
      state: {
        userData,
        postData,
        commentsData,
      },
    });
  };

  return (
    <div
      className={`post${link ? " post--link" : ""}`}
      onClick={() => link && redirect()}
    >
      <LoggedPostInfo
        helloMsg="Hello from"
        componentName="PostInfo"
        postData={postData}
      />
      <LoggedUser
        helloMsg="Hello from"
        componentName="User"
        userData={userData}
      />
      {commentsData?.map(
        (comment: IComment) =>
          comment.postId === postData.id && (
            <LoggedComment
              helloMsg="Hello from"
              componentName="Comment"
              key={comment.id}
              commentData={comment}
            />
          )
      )}
    </div>
  );
};

export default Post;
