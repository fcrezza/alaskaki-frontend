import React from "react";
import styled from "styled-components";
import {lighten} from "polished";

const AccordionContainer = styled.div`
  &:not(:last-child) {
    border-bottom: ${({theme}) => `1px solid ${theme.gray}`};
  }
`;

const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background: transparent;
  padding: 1rem 0.9rem;
  cursor: pointer;
  outline: none;
`;

const AccordionTitle = styled.h3`
  margin: 0;
  color: ${({theme}) => theme["black.50"]};
  font-size: 1rem;
`;

const AccordionIconContainer = styled.div`
  border-radius: 50%;
  padding: 8px;

  ${AccordionButton}:focus & {
    background-color: ${({theme}) => lighten(0.06, theme.gray)};
  }

  ${AccordionButton}:hover
  & {
    background-color: ${({theme}) => lighten(0.06, theme.gray)};
  } ;
`;

const AccordionIcon = styled.div`
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

const AccordionContent = styled.div`
  height: ${({isOpen}) => (isOpen ? "auto" : 0)};
  width: 100%;
  overflow: hidden;
`;

const AccordionContentContainer = styled.div`
  padding: 0.5rem 0.9rem 1rem;
`;

export default function Accordion({title, children}) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <AccordionContainer>
      <AccordionButton onClick={() => setIsOpen(!isOpen)}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIconContainer>
          <AccordionIcon isOpen={isOpen} />
        </AccordionIconContainer>
      </AccordionButton>
      <AccordionContent isOpen={isOpen}>
        <AccordionContentContainer>{children}</AccordionContentContainer>
      </AccordionContent>
    </AccordionContainer>
  );
}
