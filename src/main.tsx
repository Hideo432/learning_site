import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App></App>
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Error");
}
