import styled from "styled-components";
import {darken, lighten} from "polished";

export const SelectContainer = styled.div``;

export const Menu = styled.div`
  position: relative;
  z-index: 2;
`;

export const ItemsContainer = styled.div`
  background: ${({theme}) => theme.white};
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  top: 100%;
  border-radius: 5px;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const Item = styled.div`
  padding: 1rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  background: ${({isSelected, theme}) =>
    isSelected ? darken(0.05, theme.white) : null};
  &:not(:last-child) {
    border-bottom: ${({theme}) => `1px solid ${theme.gray}`};
  }
`;

export const ButtonText = styled.div`
  font-size: 1rem;
  color: ${({theme}) => theme["black.100"]};
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: hidden;
`;

export const SelectButton = styled.button`
  background: ${({theme}) => darken(0.05, theme.white)};
  transition: background 0.2s;
  padding-left: 1rem;
  width: 100%;
  padding: 0.6rem;
  border: 0;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: ${({theme}) => darken(0.098, theme.white)};
  }

  &:focus {
    background: ${({theme}) => darken(0.098, theme.white)};
    box-shadow: ${({theme}) => `0 0 0 3px ${lighten(0.25, theme.blue)}`};
  }

  & > ${ButtonText}:last-child {
    font-size: 1.6rem;
  }
`;

export const Label = styled.label``;

export const SelectButtonIconContainer = styled.div`
  padding: 8px;
`;

export const SelectButtonIcon = styled.div`
  width: 10px;
  height: 10px;
  border-color: ${({theme}) => theme["black.50"]};
  border-width: 2px 2px 0 0;
  border-style: solid;
  transform: ${({isOpen}) =>
    isOpen
      ? "translateY(2px) rotate(-45deg)"
      : "translateY(-2px) rotate(135deg)"};
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: ${({direction}) =>
    direction === "horizontal" ? "row" : "column"};
  align-items: ${({direction}) =>
    direction === "horizontal" ? "center" : "flex-start"};

  & > ${Label} {
    margin: ${({direction}) =>
      direction === "horizontal" ? "0 1rem 0" : "0 0 1rem"};
  }
`;

export const SelectTriggerContainer = styled.div`
  width: 100%;
`;
