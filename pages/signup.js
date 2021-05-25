import SignupForm from "features/signup/form";
import Head from "components/Head";
import {UnauthenticatedRoute} from "components/Routes";
import Layout from "components/Layout";

function Signup() {
  return (
    <UnauthenticatedRoute>
      <Head title="Signup | Alas Kaki" description="Signup | Alas Kaki" />
      <Layout>
        <SignupForm />
      </Layout>
    </UnauthenticatedRoute>
  );
}

export default Signup;
