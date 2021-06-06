import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://84c2888b49e54b5b90e7ce27fac9318e@o722716.ingest.sentry.io/5802753"
});
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
