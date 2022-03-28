import { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = (): ReactElement => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
};

export default Header;
