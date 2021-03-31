import SignupForm from "features/signup/form";
import Head from "components/Head";
import Navigation from "features/navigation";
import {UnauthenticatedRoute} from "components/Routes";

function Signup() {
  return (
    <>
      <UnauthenticatedRoute>
        <Head title="Signup | Alas Kaki" description="Signup | Alas Kaki" />
        <Navigation />
        <SignupForm />
      </UnauthenticatedRoute>
    </>
  );
}

export default Signup;
