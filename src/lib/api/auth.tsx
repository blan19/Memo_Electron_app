import { store } from "@/reducers/index";
import { resetUser, setCurrentUser } from "@/reducers/userSlice";
import { IStrapiUser } from "@/types/user.type";
import axios from "axios";
import jwt from "jwt-decode";

const login: (
  url: string,
  email: string,
  password: string
) => Promise<any> = async (url, email, password) => {
  const res = await axios({
    url,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { identifier: email, password },
  });

  const { jwt, user: resUser } = res.data;

  localStorage.setItem("token", jwt);
  localStorage.setItem(
    "user",
    JSON.stringify({ email: resUser.email, username: resUser.username })
  );
  setAuthorizationToken(jwt);
  setAuthorizationUser(jwt, {
    email: resUser.email,
    username: resUser.username,
  });

  return res.data;
};

const logout: () => void = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setAuthorizationToken(localStorage.token);
};

const setAuthorizationToken: (token: string | null) => void = (token) => {
  token
    ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete axios.defaults.headers.common["Authorization"];
};

const setAuthorizationUser: (token: string, user: IStrapiUser) => void = (
  token,
  user
) => {
  token ? store.dispatch(setCurrentUser(user)) : store.dispatch(resetUser());
};

export { login, logout, setAuthorizationToken };
