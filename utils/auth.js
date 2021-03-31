import React from "react";
import useSWR from "swr";
import {useErrorHandler} from "react-error-boundary";

import axios from "utils/axios";

const AuthContext = React.createContext();

export function AuthProvider({children}) {
  const {data: user, mutate, error} = useSWR("/api/v1/auth/user", url =>
    axios.get(url).then(res => res.data)
  );
  useErrorHandler(error);

  const localLogin = async data => {
    const response = await axios.post("/api/v1/auth/login/local", data);
    mutate(response.data.data, false);
  };

  const googleOauth = async response => {
    const userData = await axios.post("/api/v1/auth/login/google", {
      token: response.tokenId
    });
    mutate(userData.data, false);
  };

  const localSignup = async data => {
    const userData = await axios.post("/api/v1/auth/signup/local", data);
    mutate({signup: true, ...userData.data}, false);
  };

  const logout = async () => {
    await axios.delete("/api/v1/auth/logout");
    mutate({}, false);
  };

  const updateProfile = newData => {
    mutate(
      prevData => ({
        ...prevData,
        ...newData
      }),
      false
    );
  };

  return (
    <AuthContext.Provider
      value={{
        localLogin,
        googleOauth,
        localSignup,
        logout,
        user,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
