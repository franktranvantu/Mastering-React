import Raven from "raven-js";

function init() {
  Raven.config("https://84c2888b49e54b5b90e7ce27fac9318e@o722716.ingest.sentry.io/5802753", {
    release: '1-0-0',
    environment: 'development'
  });
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
}