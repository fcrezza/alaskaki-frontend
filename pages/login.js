import LoginForm from "features/login/form";
import Head from "components/Head";
import Navigation from "features/navigation";
import {UnauthenticatedRoute} from "components/Routes";

function Login() {
  return (
    <>
      <UnauthenticatedRoute>
        <Head title="Login | Alas Kaki" description="Login | Alas Kaki" />
        <Navigation />
        <LoginForm />
      </UnauthenticatedRoute>
    </>
  );
}

export default Login;
