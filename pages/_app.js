import Theme from "utils/theme";

function MyApp({Component, pageProps}) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
