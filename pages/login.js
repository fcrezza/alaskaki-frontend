import axios from "axios";
import Form from "features/login/form";
import Head from "next/head";
import {useRouter} from "next/router";

import {GoogleLogin} from "react-google-login";

function Login() {
  const router = useRouter();

  const handleSuccessLogin = async successResponse => {
    console.log({successResponse});
    await axios.post(
      "http://localhost:8080/api/v1/auth/login/google",
      {
        token: successResponse.tokenId
      },
      {
        withCredentials: true
      }
    );
    router.push("/profile");
  };

  const handleErrorLogin = errorResponse => {
    console.log({errorResponse});
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Masuk Dengan Google"
        onSuccess={handleSuccessLogin}
        onFailure={handleErrorLogin}
        theme="dark"
      />
      <Form />
    </div>
  );
}

export default Login;
