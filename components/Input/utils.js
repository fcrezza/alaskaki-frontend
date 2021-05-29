import styled from "styled-components";
import {darken, lighten} from "polished";

export const StyledInput = styled.input`
  padding: ${({size}) =>
    size === "small" ? "0.4rem 0.6rem" : "0.8rem 1.2rem"};
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

export const StyledInputRightElement = styled.div`
  margin-right: 0.5rem;
  width: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledInputGroup = styled.div`
  position: relative;
  width: 100%;

  ${StyledInput} {
    position: relative;
    padding-right: 3.5rem;
  }
`;

export const StyledInputLabel = styled.label`
  font-size: 1rem;
  display: block;
  color: ${({theme}) => theme["black.50"]};
  margin-bottom: 0.5rem;
`;
