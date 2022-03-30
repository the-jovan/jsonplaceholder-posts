import { FunctionComponent, ReactElement } from "react";
import "./_comment.scss";
import { IComment } from "../../models/Comment.model";

const Comment: FunctionComponent<{ commentData: IComment | undefined }> = ({
  commentData,
}): ReactElement => {
  return <div className="comment">{commentData?.body}</div>;
};

export default Comment;
