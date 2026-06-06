const fs = require("fs");
const url = require("url");
const { run } = require("react-snap");
const { reactSnap, homepage, devDependencies, dependencies } = require("../package.json");

const isStrict = String(process.env.POSTBUILD_STRICT || "") === "1";
const isDisabled = String(process.env.REACT_SNAP_DISABLE || "") === "1";
const macChromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (isDisabled) {
  console.log("Skipping react-snap (REACT_SNAP_DISABLE=1).");
  process.exit(0);
}

require("./patch-react-snap")();

const reactScriptsVersion = parseInt(
  (devDependencies && devDependencies["react-scripts"]) ||
    (dependencies && dependencies["react-scripts"])
);

let fixWebpackChunksIssue;
switch (reactScriptsVersion) {
  case 1:
    fixWebpackChunksIssue = "CRA1";
    break;
  case 2:
    fixWebpackChunksIssue = "CRA2";
    break;
}

const puppeteerExecutablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  (fs.existsSync(macChromePath) ? macChromePath : undefined);

const reactSnapOptions = {
  ...reactSnap,
  ...(puppeteerExecutablePath ? { puppeteerExecutablePath } : {})
};

run({
  publicPath: process.env.PUBLIC_URL || homepage
    ? url.parse(process.env.PUBLIC_URL || homepage).pathname
    : "/",
  fixWebpackChunksIssue,
  ...reactSnapOptions
}).catch(error => {
  console.error(error);

  if (!isStrict) {
    // react-snap relies on Chromium. If it cannot launch locally, do not fail the build.
    console.warn("react-snap failed; continuing without prerender (set POSTBUILD_STRICT=1 to fail).");
    process.exit(0);
  }

  process.exit(1);
});
