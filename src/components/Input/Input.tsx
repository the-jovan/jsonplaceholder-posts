import { FunctionComponent } from "react";
import { Input } from "@chakra-ui/react";
import "./_input.scss";

const CustomInput: FunctionComponent<{
  type: string;
  value: string | number;
  changeFn: (val: string | number) => void;
  placeholder: string;
}> = ({ type, value, changeFn, placeholder }) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={(e) => changeFn(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
