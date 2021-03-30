import React from "react";
import styled, {css} from "styled-components";
import {lighten, darken} from "polished";

const BaseButton = styled.button`
  background: none;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 5px;
  text-align: center;
  width: auto;

  &:focus,
  &:active {
    box-shadow: ${({theme}) => `0 0 0 3px ${lighten(0.25, theme.blue)}`};
  }
`;

const outline = css`
  background: transparent;
  border: 1px solid ${({theme}) => theme.blue};
  color: ${({theme}) => theme.blue};

  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => darken(0.05, theme.white)};
  }
`;

const StyledButton = styled(BaseButton)`
  color: ${({theme}) => theme.white};
  padding: ${({size}) => (size === "small" ? ".8rem 1rem" : ".8rem 1rem")};
  font-size: ${({size}) => (size === "small" ? "1rem" : "1.125rem")};
  display: ${({block}) => (block ? "block" : "inline-block")};
  font-weight: 700;
  background: ${({disabled, theme}) =>
    disabled ? theme["black.50"] : theme.blue};
  cursor: ${({disabled}) => (disabled ? "default" : "pointer")};
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => lighten(0.05, theme.blue)};
  }

  ${({variant}) => (variant === "outline" ? outline : null)}
`;

const StyledIconButton = styled(BaseButton)`
  border-radius: 5px;

  * {
    display: block;
  }
`;

export function Button(props) {
  const {type, children, onClick, block, variant, as, ...rest} = props;

  return (
    <StyledButton
      as={as}
      type={type || "button"}
      onClick={onClick}
      variant={variant}
      block={block ? "true" : "false"}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export function IconButton({type, children, onClick}) {
  return (
    <StyledIconButton type={type || "button"} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
}
