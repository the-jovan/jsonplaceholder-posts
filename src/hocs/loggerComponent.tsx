import { ReactElement } from "react";

const loggerComponent =
  (Component: any) =>
  (props: any): ReactElement => {
    console.log(`${props.helloMsg} ${props.componentName}`);

    return <Component {...props} />;
  };

export default loggerComponent;
