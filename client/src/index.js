import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store"; //Import the store from the store.js
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* put a <Provider> around your <App>, and pass the store as a prop:*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
