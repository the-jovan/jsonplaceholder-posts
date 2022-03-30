import { ReactElement } from "react";

const loggerComponent =
  (Component: any) =>
  (props: any): ReactElement => {
    console.log("sth");

    return <Component {...props} />;
  };

export default loggerComponent;
