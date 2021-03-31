import {useRouter} from "next/router";
import {useAuth} from "utils/auth";

function Profile() {
  const router = useRouter();
  const {logout, user} = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Profile;
