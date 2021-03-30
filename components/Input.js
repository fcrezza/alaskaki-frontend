import React from "react";
import styled from "styled-components";
import {darken, lighten} from "polished";

const StyledInput = styled.input`
  padding: 0.8rem 1.2rem;
  width: 100%;
  border: 0;
  border-radius: 5px;
  color: ${({theme}) => theme["black.50"]};
  font-size: 1rem;
  background: ${({theme}) => darken(0.05, theme.white)};
  outline: 0;
  transition: background 0.2s;

  &:hover {
    background: ${({theme}) => darken(0.098, theme.white)};
  }

  &:focus {
    background: ${({theme}) => darken(0.098, theme.white)};
    box-shadow: ${({theme}) => `0 0 0 3px ${lighten(0.25, theme.blue)}`};
  }
`;

const StyledInputRightElement = styled.div`
  margin-right: 0.5rem;
  width: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledInputGroup = styled.div`
  position: relative;
  width: 100%;

  ${StyledInput} {
    position: relative;
    padding-right: 3.5rem;
  }
`;

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