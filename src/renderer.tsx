import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./reducers/index";

const container = document.getElementById("App");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
