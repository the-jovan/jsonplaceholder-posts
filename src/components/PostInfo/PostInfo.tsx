import { FunctionComponent, ReactElement } from "react";
import { Text } from "@chakra-ui/react";
import { IPost } from "../../models/Post.model";

const PostInfo: FunctionComponent<{
  postData: IPost;
}> = ({ postData }): ReactElement => {
  return <Text fontSize="3xl">{postData.body}</Text>;
};

export default PostInfo;
