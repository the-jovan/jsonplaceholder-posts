import { FunctionComponent, ReactElement } from "react";
import "./_header.scss";
import { Link } from "react-router-dom";

const Header: FunctionComponent = (): ReactElement => {
  return (
    <nav className="header">
      {/* <Link to="/">Home</Link> */}
      <Link to="/">Posts</Link>
    </nav>
  );
};

export default Header;
