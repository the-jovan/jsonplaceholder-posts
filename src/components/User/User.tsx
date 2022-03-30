import { FunctionComponent, ReactElement } from "react";
import { IUser } from "../../models/User.model";

const User: FunctionComponent<{ userData: IUser | undefined }> = ({
  userData,
}): ReactElement => {
  return (
    <div>
      <h2>{userData?.username}</h2>
    </div>
  );
};

export default User;
