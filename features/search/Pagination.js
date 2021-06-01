import {darken, lighten} from "polished";
import styled, {css} from "styled-components";

const outline = css`
  background: transparent;
  border: 3px solid
    ${({theme, disabled}) => (disabled ? lighten(0.1, theme.blue) : theme.blue)};
  color: ${({theme, disabled}) =>
    disabled ? lighten(0.1, theme.blue) : theme.blue};

  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => darken(0.05, theme.white)};
  }
`;

const filled = css`
  background: ${({theme}) => theme.blue};
  color: ${({theme}) => theme.white};
  border: 0;

  &:hover,
  &:focus,
  &:active {
    background: ${({theme}) => lighten(0.05, theme.blue)};
  }
`;

const PaginationContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  height: 40px;
  width: 40px;
  cursor: pointer;
  ${({isActive}) => (isActive ? filled : outline)};

  &:focus,
  &:active {
    box-shadow: ${({theme, disabled}) =>
      disabled ? null : `0 0 0 3px ${lighten(0.25, theme.blue)}`};
  }

  &:not(:last-child) {
    margin-right: 0.7rem;
  }
`;

export default function Pagination() {
  return (
    <PaginationContainer>
      <PaginationButton isActive>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
    </PaginationContainer>
  );
}
