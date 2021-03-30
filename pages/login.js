import LoginForm from "features/login/form";
import Head from "components/Head";
import Navigation from "features/navigation";

function Login() {
  return (
    <>
      <Head title="Login | Alas Kaki" description="Login | Alas Kaki" />
      <Navigation />
      <LoginForm />
    </>
  );
}

export default Login;
