import styled, {css} from "styled-components";
import {lighten, darken} from "polished";

const outline = css`
  background: transparent;
  border: 1px solid
    ${({theme, disabled}) => (disabled ? lighten(0.1, theme.blue) : theme.blue)};
  color: ${({theme, disabled}) =>
    disabled ? lighten(0.1, theme.blue) : theme.blue};
  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => darken(0.05, theme.white)};
  }
`;

const ghost = css`
  background: transparent;
  color: ${({theme}) => theme.blue};

  &:hover,
  &:focus {
    background: ${({theme}) => lighten(0.06, theme.gray)};
  }
`;

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
    box-shadow: ${({theme, disabled}) =>
      disabled ? null : `0 0 0 3px ${lighten(0.25, theme.blue)}`};
  }
`;

export const StyledButton = styled(BaseButton)`
  color: ${({theme}) => theme.white};
  padding: ${({size}) => (size === "small" ? ".6rem .8rem" : ".8rem 1rem")};
  font-size: ${({size}) => (size === "small" ? "1rem" : "1.125rem")};
  display: ${({block}) => (block === "true" ? "block" : "inline-block")};
  width: ${({block}) => (block === "true" ? "100%" : "auto")};
  font-weight: 700;
  background: ${({disabled, theme}) =>
    disabled ? lighten(0.09, theme.blue) : theme.blue};
  cursor: ${({disabled}) => (disabled ? "default" : "pointer")};
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => lighten(0.05, theme.blue)};
  }

  ${({variant}) =>
    variant === "outline" ? outline : variant === "ghost" ? ghost : null}
`;

export const StyledIconButton = styled(BaseButton)`
  border-radius: 5px;
  padding: 0.3rem;
  background-color: ${({theme, backgroundColor, disabled}) =>
    disabled
      ? lighten(0.09, theme[backgroundColor])
      : backgroundColor
      ? theme[backgroundColor]
      : null};
  color: ${({theme, color}) => (color ? theme[color] : theme["black.100"])};
  cursor: ${({disabled}) => (disabled ? "default" : "pointer")};

  &:hover,
  &:focus {
    background: ${({theme, backgroundColor}) =>
      backgroundColor
        ? lighten(0.06, theme[backgroundColor])
        : lighten(0.06, theme.gray)};
  }

  * {
    display: block;
  }
`;
