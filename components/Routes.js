import {useRouter} from "next/router";

import {useAuth} from "utils/auth";

export function UnauthenticatedRoute({children}) {
  const {user} = useAuth();
  const {replace} = useRouter();

  if (!Object.keys(user).length || user.signup) {
    return children;
  }

  replace("/");
  return null;
}

export function AuthenticatedRoute({children}) {
  const {user} = useAuth();
  const {replace} = useRouter();

  if (Object.keys(user).length) {
    return children;
  }

  replace("/login");
  return null;
}
