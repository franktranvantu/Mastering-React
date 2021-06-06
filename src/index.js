import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from 'raven-js';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Raven.config("https://84c2888b49e54b5b90e7ce27fac9318e@o722716.ingest.sentry.io/5802753", {
  release: '1-0-0',
  environment: 'development'
});
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
