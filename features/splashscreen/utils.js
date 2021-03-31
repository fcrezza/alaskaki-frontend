import styled from "styled-components";

export const SplashScreenContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
