import { FunctionComponent, ReactElement } from "react";
import { IComment } from "../../models/Comment.model";

const Comment: FunctionComponent<{ commentData: IComment | undefined }> = ({
  commentData,
}): ReactElement => {
  return <div>{commentData?.body}</div>;
};

export default Comment;
