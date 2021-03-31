import {useRouter} from "next/router";

import {AuthenticatedRoute} from "components/Routes";
import {useAuth} from "utils/auth";

function Profile() {
  const router = useRouter();
  const {logout, user} = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <AuthenticatedRoute>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={handleLogout}>logout</button>
      </div>
    </AuthenticatedRoute>
  );
}

export default Profile;
