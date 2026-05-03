const { spawnSync } = require("child_process");

const isStrict = String(process.env.POSTBUILD_STRICT || "") === "1";
const isDisabled = String(process.env.REACT_SNAP_DISABLE || "") === "1";

if (isDisabled) {
  console.log("Skipping react-snap (REACT_SNAP_DISABLE=1).");
  process.exit(0);
}

const result = spawnSync("npx", ["react-snap"], {
  stdio: "inherit",
  shell: true
});

if ((result.status ?? 0) !== 0 && !isStrict) {
  // react-snap relies on Chromium. If it cannot launch locally, do not fail the build.
  console.warn("react-snap failed; continuing without prerender (set POSTBUILD_STRICT=1 to fail).");
  process.exit(0);
}

process.exit(result.status ?? 0);
