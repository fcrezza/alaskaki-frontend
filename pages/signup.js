import SignupForm from "features/signup/form";
import Head from "components/Head";
import Navigation from "features/navigation";

function Signup() {
  return (
    <>
      <Head title="Signup | Alas Kaki" description="Signup | Alas Kaki" />
      <Navigation />
      <SignupForm />
    </>
  );
}

export default Signup;
