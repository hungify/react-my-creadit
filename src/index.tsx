import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";
import GlobalStyle from "./styles/GlobalStyled";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
