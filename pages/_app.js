import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "components/ErrorFallback";
import SplashScreen from "features/splashscreen";
import Theme from "utils/theme";
import Head from "components/Head";
import {AuthProvider} from "utils/auth";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <Head
        title="Alas Kaki | Temukan sepatu terbaik produksi anak negeri"
        description="Alas Kaki | Temukan sepatu terbaik produksi anak negeri"
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthProvider>
          <SplashScreen>
            <Component {...pageProps} />
          </SplashScreen>
        </AuthProvider>
      </ErrorBoundary>
    </Theme>
  );
}

export default MyApp;
