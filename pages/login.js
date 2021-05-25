import LoginForm from "features/login/form";
import Head from "components/Head";
import {UnauthenticatedRoute} from "components/Routes";
import Layout from "components/Layout";

function Login() {
  return (
    <UnauthenticatedRoute>
      <Head title="Login | Alas Kaki" description="Login | Alas Kaki" />
      <Layout>
        <LoginForm />
      </Layout>
    </UnauthenticatedRoute>
  );
}

export default Login;
