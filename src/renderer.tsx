import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./reducers/index";
import { setAuthorizationToken } from "./lib/api/auth";
import { resetUser, setCurrentUser } from "./reducers/userSlice";

setAuthorizationToken(localStorage.token);
localStorage.token
  ? store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
  : store.dispatch(resetUser());

const container = document.getElementById("App");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
