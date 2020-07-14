// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://d1d7f02d84f04404b937b4199661affe@o413590.ingest.sentry.io/5300395",
  // });
}

function log(error) {
  // Sentry.captureMessage(error);
  console.log("An unexpected error occured!");
}

export default { init, log };
