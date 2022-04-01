import { ReactElement, useEffect } from "react";

const loggerComponent =
  (Component: any) =>
  (props: any): ReactElement => {
    useEffect(() => {
      console.log(`${props.helloMsg} ${props.componentName}`);
    }, []);

    return <Component {...props} />;
  };

export default loggerComponent;
