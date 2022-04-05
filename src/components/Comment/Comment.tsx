import { FunctionComponent, ReactElement } from "react";
import { Text } from "@chakra-ui/react";
import { IComment } from "../../models/Comment.model";

const Comment: FunctionComponent<{ commentData: IComment | undefined }> = ({
  commentData,
}): ReactElement => {
  return <Text fontSize="lg">{commentData?.body}</Text>;
};

export default Comment;
