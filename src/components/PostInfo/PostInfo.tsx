import { FunctionComponent, ReactElement } from "react";
import "./_postinfo.scss";
import { IPost } from "../../models/Post.model";

const PostInfo: FunctionComponent<{
  postData: IPost;
}> = ({ postData }): ReactElement => {
  return <div className="postinfo">{postData.body}</div>;
};

export default PostInfo;
