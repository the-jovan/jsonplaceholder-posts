import React, { FunctionComponent } from "react";
import { Container, Divider } from "@chakra-ui/react";
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

  // when clicking on post that has link prop, we're redirected to
  // SinglePost route with passed post data that we access from location.state
  // and that way we do not have to fetch data again
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
    <Container
      border="1px"
      borderColor="#000"
      maxW="full"
      onClick={() => link && redirect()}
    >
      <LoggedPostInfo
        helloMsg="Hello from"
        componentName="PostInfo"
        postData={postData}
      />
      <Divider />
      <LoggedUser
        helloMsg="Hello from"
        componentName="User"
        userData={userData}
      />
      {commentsData?.map(
        (comment: IComment) =>
          comment.postId === postData.id && (
            <React.Fragment key={comment.id}>
              <LoggedComment
                helloMsg="Hello from"
                componentName="Comment"
                commentData={comment}
              />
              <Divider />
            </React.Fragment>
          )
      )}
    </Container>
  );
};

// export default memo(Post);
export default Post;
