import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthUser } from "../state/AuthUser";
import { useRecoilState } from "recoil";
import configuration from "../config";

// const ProtectedRoute = () => {
//   const [cookies] = useCookies(["token"]);
//   console.log(cookies.token);

//   return cookies.token ? <Outlet /> : <Navigate to="/login" />;
// };

const ProtectedRoute = () => {
  const [cookies] = useCookies(["token"]);
  console.log("cookies token", cookies.token);
  const [token, setToken] = useState(() => cookies.token);
  const [authUser, setAuthUser] = useRecoilState(AuthUser);
  const { API_BASE_URL } = configuration;

  useEffect(() => {
    setToken(cookies.token);
  }, [cookies.token]);

  useEffect(() => {
    console.log("useEffect is running");

    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/user/my-profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.token}`,
          },
          credentials: "include",
        });
        const data = await response.json();
        console.log(data.user.username);
        if (data.success) {
          setAuthUser({
            user: data.user,
            loading: false,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLoggedInUser();
  }, [token]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
