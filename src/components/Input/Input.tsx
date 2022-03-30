import { FunctionComponent } from "react";

const Input: FunctionComponent<{
  type: string;
  value: string | number;
  changeFn: (val: string | number) => void;
  placeholder: string;
}> = ({ type, value, changeFn, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => changeFn(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
