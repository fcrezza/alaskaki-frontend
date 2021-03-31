import Theme from "utils/theme";
import {AuthProvider} from "utils/auth";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Theme>
  );
}

export default MyApp;
