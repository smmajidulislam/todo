import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserProvider } from "./contexts/userContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider } from "react-router";
import routers from "./route/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={routers} />
      </UserProvider>
    </Provider>
  </StrictMode>
);
