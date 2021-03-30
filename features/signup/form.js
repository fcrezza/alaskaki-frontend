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
  GoogleButtonContentContainer,
  GoogleButtonText
} from "./utils";
import ErrorMessage from "components/ErrorMessage";
import axios from "utils/axios";

const signupValidation = yup.object().shape({
  fullname: yup.string().trim().required("Nama lengkap tidak boleh kosong"),
  email: yup
    .string()
    .trim()
    .email("Masukan alamat email yang valid")
    .required("Masukan alamat email yang valid"),
  password: yup
    .string()
    .trim()
    .min(8, state => `Password minimal mengandung ${state.min} karakter`)
    .required("Masukan password yang valid")
});

function Form() {
  const router = useRouter();
  const {handleSubmit, register, formState, errors} = useForm({
    resolver: yupResolver(signupValidation)
  });
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  const onSubmit = value => {
    console.log(value);
  };

  const handleSuccessLogin = async successResponse => {
    await axios.post("/api/v1/auth/login/google", {
      token: successResponse.tokenId
    });
    router.push("/profile");
  };

  const handleErrorLogin = errorResponse => {
    console.log({errorResponse});
  };

  return (
    <FormContainer>
      <Title>Daftar</Title>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
        onSuccess={handleSuccessLogin}
        onFailure={handleErrorLogin}
        theme="dark"
        render={({disabled, onClick}) => (
          <Button variant="outline" onClick={onClick} disabled={disabled} block>
            <GoogleButtonContentContainer>
              <FaGoogle />
              <GoogleButtonText>daftar dengan google</GoogleButtonText>
            </GoogleButtonContentContainer>
          </Button>
        )}
      />
      <Divider />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel id="fullname">Nama Lengkap</InputLabel>
        <Input id="fullname" name="fullname" ref={register} />
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
          Daftar
        </Button>
      </StyledForm>
      {Object.keys(errors).length ? (
        <ErrorMessage>{errors[Object.keys(errors)[0]].message}</ErrorMessage>
      ) : null}
    </FormContainer>
  );
}

export default Form;
