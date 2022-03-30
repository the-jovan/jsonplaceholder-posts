import { FunctionComponent, ReactElement } from "react";
import "./_user.scss";
import { IUser } from "../../models/User.model";

const User: FunctionComponent<{ userData: IUser | undefined }> = ({
  userData,
}): ReactElement => {
  return (
    <div className="user">
      by <span className="user__name">{userData?.username}</span>
    </div>
  );
};

export default User;
