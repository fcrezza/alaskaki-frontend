import styled from "styled-components";

export const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: ${({theme}) => theme["black.50"]};
  font-size: 1.8rem;
  margin: 0 0 2rem;
  font-weight: 500;
`;
