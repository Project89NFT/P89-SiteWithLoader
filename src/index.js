import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Home/Loading";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
