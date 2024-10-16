import { configureStore } from "@reduxjs/toolkit";
import React, { useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Bars } from "react-loader-spinner";
import { Provider } from "react-redux";
import Switch, { Case, Default } from "react-switch-case";
import redux from "./redux";

import "./assets/css/01-bootstrap.css";
import "./assets/css/02-icons.css";
import "./assets/css/03-app.css";

const Admin = React.lazy(() => import("./admin/Context"));

const App = () => {
   // string
   const [pathname, setPathname] = useState("");

   useLayoutEffect(() => {
      // Frame-busting to prevent site from being loaded within a frame without permission (click-jacking)
      if (window.top != window.self) {
         window.top.location.replace(window.self.location.href);
      }

      const location = window.location.pathname.split("/");
      setPathname(location[1]);
      return () => {};
   }, []);

   return (
      <React.Suspense
         fallback={
            <Bars
               visible={true}
               color="#4fa94d"
               radius="9"
               wrapperStyle={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
               }}
               wrapperClass="page-loader flex-column justify-content-center"
            />
         }>
         <Switch condition={pathname}>
            <Case value="admin">
               <Admin />
            </Case>
            <Default>
               <Admin />
            </Default>
         </Switch>
      </React.Suspense>
   );
};

const store = configureStore({
   reducer: { redux },
});

const container = document.getElementById("layout-wrapper");
const root = createRoot(container);
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);

if (process.env.NODE_ENV === "development") {
   new EventSource("http://localhost:8081/esbuild").addEventListener("change", () => location.reload());
}
