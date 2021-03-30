import styled from "styled-components";

const StyledErrorMessage = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({theme}) => theme.red};
`;

function ErrorMessage({children}) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}

export default ErrorMessage;
