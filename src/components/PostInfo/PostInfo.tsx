import { FunctionComponent, ReactElement } from "react";
import { IPost } from "../../models/Post.model";

const PostInfo: FunctionComponent<{
  postData: IPost;
}> = ({ postData }): ReactElement => {
  return (
    <div>
      {postData.body} <hr />
    </div>
  );
};

export default PostInfo;
