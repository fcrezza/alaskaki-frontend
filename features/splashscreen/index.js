import {Logo} from "components/Icon";
import {useAuth} from "utils/auth";
import {SplashScreenContainer} from "./utils";

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
