import React from "react";

import {
  StyledInput,
  StyledInputGroup,
  StyledInputLabel,
  StyledInputRightElement
} from "./utils";

export const Input = React.forwardRef((props, ref) => {
  const {placeholder, type, onChange, value, name, ...rest} = props;

  return (
    <StyledInput
      id={name}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
});

export function InputGroup({children}) {
  return <StyledInputGroup>{children}</StyledInputGroup>;
}

export function InputRightElement({children}) {
  return <StyledInputRightElement>{children}</StyledInputRightElement>;
}

export function InputLabel({children, id}) {
  return <StyledInputLabel htmlFor={id}>{children}</StyledInputLabel>;
}
