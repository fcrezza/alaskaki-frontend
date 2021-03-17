import axios from "axios";
import {useRouter} from "next/router";
import useSWR from "swr";

function Profile() {
  const router = useRouter();
  const {data} = useSWR("http://localhost:8080/api/v1/auth/user", url =>
    axios.get(url, {withCredentials: true})
  );

  const handleLogout = async () => {
    await axios.delete("http://localhost:8080/api/v1/auth/logout", {
      withCredentials: true
    });
    router.push("/");
  };

  if (!data) {
    return "loading...";
  }

  return (
    <div>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Profile;
