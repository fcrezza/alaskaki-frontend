import {Logo} from "components/Icon";
import styled from "styled-components";
import {useAuth} from "utils/auth";

const SplashScreenContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SplashScreen({children}) {
  const {user} = useAuth();

  if (!user) {
    return (
      <SplashScreenContainer>
        <Logo width="64" height="64" />
      </SplashScreenContainer>
    );
  }

  return children;
}

export default SplashScreen;
