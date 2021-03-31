import SplashScreen from "features/splashscreen";
import Theme from "utils/theme";
import {AuthProvider} from "utils/auth";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <AuthProvider>
        <SplashScreen>
          <Component {...pageProps} />
        </SplashScreen>
      </AuthProvider>
    </Theme>
  );
}

export default MyApp;
