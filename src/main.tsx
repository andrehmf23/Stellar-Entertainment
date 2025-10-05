import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProviders } from "./context";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </StrictMode>
);
