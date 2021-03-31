import * as React from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {GoogleLogin} from "react-google-login";
import {useRouter} from "next/router";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";

import {
  Input,
  InputGroup,
  InputRightElement,
  InputLabel
} from "components/Input";
import {Button, IconButton} from "components/Button";
import {
  FormContainer,
  StyledForm,
  Divider,
  Title,
  ForgotPassword,
  GoogleButtonContentContainer,
  GoogleButtonText
} from "./utils.js";
import Link from "components/Link";
import ErrorMessage from "components/ErrorMessage.js";
import {useAuth} from "utils/auth";

const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Masukan alamat email yang valid")
    .required("Masukan alamat email yang valid"),
  password: yup
    .string()
    .min(8, state => `Password minimal mengandung ${state.min} karakter`)
    .required("Masukan password yang valid")
});

function Form() {
  const router = useRouter();
  const {localLogin, googleOauth} = useAuth();
  const {handleSubmit, register, formState, errors, setError} = useForm({
    resolver: yupResolver(loginValidation)
  });
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  const onSubmit = async ({email, password}) => {
    try {
      await localLogin({
        email,
        password
      });
      router.push("profile");
    } catch (error) {
      if (error.response) {
        setError("server", {
          message: error.response.data.error.message
        });
      } else {
        setError("server", {
          message: "Terjadi masalah saat mengirim request, coba lagi"
        });
      }
    }
  };

  const handleGoogleLoginSuccess = async response => {
    try {
      await googleOauth(response);
      router.push("/profile");
    } catch (error) {
      if (error.response) {
        setError("server", {
          message: error.response.data.error.message
        });
      } else {
        setError("server", {
          message: "Terjadi masalah saat mengirim request, coba lagi"
        });
      }
    }
  };

  const handleGoogleLoginFailure = errorResponse => {
    console.log(errorResponse);
  };

  return (
    <FormContainer>
      <Title>Masuk</Title>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Masuk Dengan Google"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        theme="dark"
        render={({disabled, onClick}) => (
          <Button variant="outline" onClick={onClick} disabled={disabled} block>
            <GoogleButtonContentContainer>
              <FaGoogle />
              <GoogleButtonText>masuk dengan google</GoogleButtonText>
            </GoogleButtonContentContainer>
          </Button>
        )}
      />
      <Divider />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel id="email">Email</InputLabel>
        <Input id="email" name="email" ref={register} />
        <InputLabel id="password">Password</InputLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            ref={register}
          />
          <InputRightElement>
            <IconButton
              onClick={() => setPasswordVisibility(prevState => !prevState)}
            >
              {isPasswordVisible ? (
                <FaEyeSlash size="1.2rem" />
              ) : (
                <FaEye size="1.2rem" />
              )}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <Button type="submit" disabled={formState.isSubmitting} block>
          Masuk
        </Button>
      </StyledForm>
      {Object.keys(errors).length ? (
        <ErrorMessage>{errors[Object.keys(errors)[0]].message}</ErrorMessage>
      ) : null}
      <ForgotPassword>
        Lupa kata sandi? <Link href="/reset">Reset</Link>
      </ForgotPassword>
    </FormContainer>
  );
}

export default Form;
